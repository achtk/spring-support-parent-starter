package com.chua.starter.task.support.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.Version;
import com.chua.common.support.database.annotation.Column;
import lombok.Data;

/**
 * 系统任务
 *
 * @author CH
 */
@Data
public class SysTask implements Comparable<SysTask> {

    @Column(comment = "表ID")
    @TableId
    private Integer taskId;
    /**
     * 任务ID
     */
    @Column(comment = "任务ID")
    private String taskTid;
    /**
     * 任务类型
     */
    @Column(comment = "任务类型")
    private String taskType;
    /**
     * 任务分片ID
     */
    @Column(comment = "任务分片ID")
    private String taskCid;
    /**
     * 任务名称
     */
    @Column(comment = "任务名称")
    private String taskName;
    /**
     * 业务ID
     */
    @Column(comment = "业务ID")
    private String taskBusiness;
    /**
     * 游标
     */
    @Column(comment = "游标")
    private Integer taskOffset;
    /**
     * 总量
     */
    @Column(comment = "总量")
    private Integer taskTotal;

    /**
     * 总量
     */
    @Column(comment = "处理量")
    private Integer taskCurrent;
    /**
     * 是否完成
     */
    @Column(comment = "是否完成; 0: 未完成; 1:完成;2: 暂停; 3: 进行中")
    private Integer taskStatus;
    /**
     * 版本
     */
    @Version
    @Column(comment = "版本")
    private Integer taskVersion;

    /**
     * 是否完成
     *
     * @return 是否完成
     */
    public boolean isFinish() {
        return getTaskStatus() == 1 || getTaskCurrent() >= getTaskTotal();
    }

    @Override
    public int compareTo(SysTask o) {
        return (taskType + taskTid + taskBusiness + taskCid).compareTo(o.taskType + o.taskTid + o.taskBusiness + o.taskCid);
    }
}