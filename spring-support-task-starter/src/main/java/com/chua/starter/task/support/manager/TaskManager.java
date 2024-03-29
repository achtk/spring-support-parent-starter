package com.chua.starter.task.support.manager;

import com.chua.common.support.eventbus.Eventbus;
import com.chua.common.support.eventbus.EventbusType;
import com.chua.common.support.eventbus.Subscribe;
import com.chua.common.support.log.Log;
import com.chua.common.support.spi.ServiceProvider;
import com.chua.common.support.utils.ThreadUtils;
import com.chua.starter.common.support.constant.Constant;
import com.chua.starter.task.support.pojo.SysTask;
import com.chua.starter.task.support.task.Task;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.data.redis.core.StringRedisTemplate;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * 任務管理器
 *
 * @author CH
 */
public class TaskManager implements ApplicationContextAware, DisposableBean, CommandLineRunner {
    private final StringRedisTemplate redisTemplate;
    private final Eventbus eventbus;

    private final AtomicBoolean status = new AtomicBoolean(true);
    private static final Log log = Log.getLogger(Task.class);
    private final Map<String, TaskInfo> taskMap = new ConcurrentHashMap<>();
    private final Map<String, TaskInfo> copyTaskMap = new ConcurrentHashMap<>();
    private final ScheduledExecutorService scheduledExecutorService = ThreadUtils.newScheduledThreadPoolExecutor("check-heart");
    private final ScheduledExecutorService scheduledExecutorUpdateService = ThreadUtils.newScheduledThreadPoolExecutor("update-heart");
    @Resource(name = Constant.DEFAULT_TASK_EXECUTOR)
    private Executor executor;


    private final Map<String, Long> taskStepQueue = new ConcurrentHashMap<>(100000);

    public TaskManager(StringRedisTemplate redisTemplate, Eventbus eventbus) {
        this.redisTemplate = redisTemplate;
        this.eventbus = eventbus;
    }

    @Override
    public void destroy() throws Exception {
        status.set(false);
        for (TaskInfo it : taskMap.values()) {
            try {
                it.getTask().close();
            } catch (Exception ignored) {
            }
        }

        ThreadUtils.shutdownNow(scheduledExecutorService);
        ThreadUtils.shutdownNow(scheduledExecutorUpdateService);
    }


    public void afterPropertiesSet() {
        log.info("开始设置心跳检测机制");
        doInitialHeart();
        log.info("心跳检测机制初始化完成");
        doTaskWorker();
    }

    private void doInitialHeart() {
        scheduledExecutorService.scheduleAtFixedRate(() -> {

        }, 0, 1, TimeUnit.MINUTES);

        scheduledExecutorUpdateService.scheduleAtFixedRate(() -> {
            try {
                Map<String, Long> tpl = new HashMap<>(taskStepQueue);
                taskStepQueue.clear();
                for (Map.Entry<String, Long> entry : tpl.entrySet()) {
                    eventbus.post("update", entry);
                }
            } catch (Exception ignored) {
            }

        }, 0, 1, TimeUnit.MINUTES);
    }

    /**
     * 获取任务
     *
     * @param taskId 任务ID
     * @return 任务
     */
    public SysTask getTask(String taskId) {
        TaskInfo taskInfo = copyTaskMap.get(taskId);
        return null == taskInfo ? null : taskInfo.getSysTask();
    }

    /**
     * 开启任务
     */
    private void doTaskWorker() {
        executor.execute(() -> {
            while (status.get()) {
                List<TaskInfo> vs = new ArrayList<>(taskMap.values());
                taskMap.clear();
                if (vs.isEmpty()) {
                    ThreadUtils.sleepSecondsQuietly(2);
                }
                for (TaskInfo value : vs) {
                    Task task = value.getTask();
                    if (null == task) {
                        continue;
                    }
                    executor.execute(task::worker);
                }
            }
        });

    }

    /**
     * 更新长度
     *
     * @param taskTid 任务ID
     * @param size    当前任务位置
     */
    public void doUpdateStep(String taskTid, long size) {
        taskStepQueue.put(taskTid, size);
    }

    /**
     * 重置
     *
     * @param taskTid taskTid
     */
    public void reset(String taskTid) {
        eventbus.post("reset", taskTid);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {

    }

    @Override
    public void run(String... args) throws Exception {
        afterPropertiesSet();
    }

    @Data
    @AllArgsConstructor
    static
    class TaskInfo {
        private Task task;

        private SysTask sysTask;
    }


    @Subscribe(type = EventbusType.GUAVA, name = "task")
    public void listener(SysTask sysTask) {
        if (null == sysTask.getTaskTid()) {
            return;
        }

        Integer taskStatus = sysTask.getTaskStatus();
        if(null != taskStatus && 2 == taskStatus) {
            return;
        }

        Task task = ServiceProvider.of(Task.class)
                .getNewExtension(sysTask.getTaskCid(),
                        sysTask, this);

        if(null == task) {
            log.warn("任务{}不存在", sysTask.getTaskCid());
            return;
        }

        task.setSysTask(sysTask);


        TaskInfo taskInfo = new TaskInfo(task,  sysTask);
        if (!copyTaskMap.containsKey(sysTask.getTaskTid())) {
            taskMap.put(sysTask.getTaskTid(), taskInfo);
        }
        copyTaskMap.put(sysTask.getTaskTid(), taskInfo);
    }
    public void remove(String taskTid) {
        taskMap.remove(taskTid);
        TaskInfo taskInfo = copyTaskMap.get(taskTid);
        if(null != taskInfo) {
            try {
                taskInfo.getTask().close();
            } catch (Exception ignored) {
            }
        }
        copyTaskMap.remove(taskTid);
    }
    @Subscribe(type = EventbusType.GUAVA, name = "task")
    public void listener(String taskTid) {
        taskStepQueue.remove(taskTid);
        taskMap.remove(taskTid);
        TaskInfo taskInfo = copyTaskMap.get(taskTid);
        if(null != taskInfo) {
            try {
                taskInfo.getTask().close();
            } catch (Exception ignored) {
            }
        }
        copyTaskMap.remove(taskTid);
        redisTemplate.delete(taskTid);
    }
}
