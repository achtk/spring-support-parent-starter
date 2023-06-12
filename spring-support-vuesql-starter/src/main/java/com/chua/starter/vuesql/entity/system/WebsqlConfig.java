package com.chua.starter.vuesql.entity.system;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.util.Date;

import com.chua.common.support.database.annotation.Column;
import com.chua.common.support.database.annotation.Table;
import lombok.Data;

/**
 * @author CH
 */
@Table(comment = "websql_config")
@Data
@TableName(value = "websql_config")
public class WebsqlConfig {
    /**
     * 配置表ID
     */
    @TableId(value = "config_id", type = IdType.AUTO)
    @Column(comment = "配置表ID")
    private Integer configId;

    /**
     * 配置名称
     */
    @TableField(value = "config_name")
    @Column(comment = "配置名称")
    private String configName;

    /**
     * 联系;mysql等
     */
    @TableField(value = "config_type")
    @Column(comment = "联系;mysql等")
    private String configType;

    /**
     * 版本
     */
    @TableField(value = "config_version")
    @Column(comment = "版本")
    private Integer configVersion;

    /**
     * ip
     */
    @TableField(value = "config_ip")
    @Column(comment = "ip")
    private String configIp;

    /**
     * 端口
     */
    @TableField(value = "config_port")
    @Column(comment = "端口")
    private Integer configPort;

    /**
     * url
     */
    @TableField(value = "config_url")
    @Column(comment = "url")
    private String configUrl;

    /**
     * 用户名
     */
    @TableField(value = "config_username")
    @Column(comment = "用户名")
    private String configUsername;

    /**
     * 密码
     */
    @TableField(value = "config_password")
    @Column(comment = "密码")
    private String configPassword;

    /**
     * 驱动
     */
    @TableField(value = "config_driver")
    @Column(comment = "驱动")
    private String configDriver;

    /**
     * 数据库
     */
    @TableField(value = "config_database")
    @Column(comment = "数据库")
    private String configDatabase;

    /**
     * 创建时间
     */
    @TableField(value = "create_time")
    @Column(comment = "创建时间")
    private Date createTime;

    /**
     * 更新时间
     */
    @TableField(value = "update_time")
    @Column(comment = "更新时间")
    private Date updateTime;
}