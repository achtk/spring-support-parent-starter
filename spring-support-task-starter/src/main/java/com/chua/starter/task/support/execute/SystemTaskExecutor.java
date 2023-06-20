package com.chua.starter.task.support.execute;

import com.chua.common.support.json.Json;
import com.chua.common.support.log.Log;
import com.chua.common.support.utils.ThreadUtils;
import com.chua.starter.task.support.creator.TaskCreator;
import com.chua.starter.task.support.factory.TaskTemplate;
import com.chua.starter.task.support.pojo.SysTask;
import com.chua.starter.task.support.properties.TaskProperties;
import com.chua.starter.task.support.service.SystemTaskService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.time.Duration;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * 执行器
 *
 * @author CH
 */
@Component("SystemTaskExecutor")
public class SystemTaskExecutor implements InitializingBean, DisposableBean {

    private static final Log log = Log.getLogger(TaskCreator.class);
    private static final List<SysTask> CACHE = new CopyOnWriteArrayList<>();

    @Resource
    private SystemTaskService systemTaskService;

    private static final AtomicBoolean status = new AtomicBoolean(true);
    private static final ExecutorService executorService = ThreadUtils.newSingleThreadExecutor("任务执行器");
    private static final ScheduledExecutorService updateExecutorService = ThreadUtils.newScheduledThreadPoolExecutor("任务更新执行器");
    private TaskTemplate taskTemplate;

    @Resource
    private TaskProperties taskProperties;

    @Resource
    private StringRedisTemplate stringRedisTemplate;

    @Override
    public void afterPropertiesSet() throws Exception {
        executorService.execute(() -> {
            while (status.get()) {
                doExecute();
                try {
                    ThreadUtils.sleepSecondsQuietly(1);
                } catch (Exception ignored) {
                }
            }
        });

        updateExecutorService.scheduleAtFixedRate(() -> {
            synchronized (CACHE) {
                CACHE.forEach(it -> {
                    it.setTaskStatus(0);
                });
                try {
                    systemTaskService.updateBatchById(CACHE);
                    CACHE.clear();
                    taskTemplate.refresh();
                } catch (Exception ignored) {
                    CACHE.forEach(it -> {
                        it.setTaskStatus(3);
                    });
                }
            }
        }, 0, taskProperties.getCheckTime(), TimeUnit.MINUTES);
    }


    private void doExecute() {
        List<SysTask> less = new LinkedList<>();
        for (SysTask systemTask : CACHE) {

            String taskType = systemTask.getTaskType();
            TaskCreator taskCreator = taskTemplate.getTaskCreator(taskType);
            if (null == taskCreator) {
                less.add(systemTask);
                continue;
            }

            if (systemTask.getTaskStatus() == 1) {
                less.add(systemTask);
                continue;
            }

            if (systemTask.getTaskStatus() == 2) {
                continue;
            }

            stringRedisTemplate.opsForValue()
                    .set(systemTask.getTaskId() + "$000000000000000000", Json.toJson(systemTask), Duration.ofMinutes(1));
            doExecute(taskCreator, systemTask);
        }
        check(less);
    }

    private void doExecute(TaskCreator taskCreator, SysTask systemTask) {
        taskCreator.execute(systemTask);
    }

    private void check(List<SysTask> less) {
        CACHE.removeAll(less);
    }

    @Override
    public void destroy() throws Exception {
        status.set(false);
    }

    public void register(SysTask systemTask) {
        systemTask.setTaskStatus(3);
        systemTaskService.updateById(systemTask);
        String taskType = systemTask.getTaskType();
        TaskCreator taskCreator = taskTemplate.getTaskCreator(taskType);
        if (null == taskCreator) {
            log.warn("{}任务处理器不存在", taskType);
            return;
        }

        CACHE.add(systemTask);
    }

    public void register(TaskTemplate taskTemplate) {
        this.taskTemplate = taskTemplate;
    }

    public void unregister(SysTask task) {
        List<SysTask> less = new LinkedList<>();
        for (SysTask systemTask : CACHE) {
            if (systemTask.compareTo(task) == 0) {
                less.add(systemTask);
            }
        }
        check(less);
    }

    /**
     * 更新任务
     *
     * @param task 更新任务
     */
    public void update(SysTask task) {
        if (task.getTaskStatus() == 1) {
            return;
        }

        List<SysTask> less = new LinkedList<>();
        for (SysTask systemTask : CACHE) {
            if (systemTask.compareTo(task) == 0) {
                less.add(systemTask);
                break;
            }
        }
        for (SysTask systemTask : less) {
            BeanUtils.copyProperties(task, systemTask);
        }
    }
}