package com.chua.starter.mybatis.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

import static com.chua.starter.mybatis.properties.MybatisProperties.PRE;

/**
 * @author CH
 */
@Data
@ConfigurationProperties(prefix = PRE)
public class MybatisProperties {


    public static final String PRE = "plugin.mybatis";
    /**
     * 打印sql
     */
    private boolean printSql = false;
    /**
     * xml是否可热加载
     */
    private boolean xmlReload = false;

    /**
     * 可访问的IP
     */
    private List<String> webRestrictedAddress;

    /**
     * mapper加载源
     */
    private List<SqlMethodProperties> sqlMethod;
    /**
     * 自动热加载方式
     */
    private ReloadType reloadType = ReloadType.NONE;
    /**
     * 自动热加载时间
     */
    private int reloadTime = 3_000;


    @Data
    public static class SqlMethodProperties {
        /**
         * sql来源
         */
        private SqlMethodType type;

        /**
         * 源信息
         *
         * @see SqlMethodType#FILE 文件路径
         * @see SqlMethodType#MYSQL mysql datasource bean
         */
        private String source;
        /**
         * watchdog超时时间
         */
        private int timeout = 3_000;
        /**
         * 是否开启检测
         */

        private boolean watchdog;
    }

    /**
     * 方法类型
     */
    public static enum SqlMethodType {
        /**
         * 文件
         */
        FILE,
        /**
         * mysql
         */
        MYSQL
    }

    /**
     * 类型
     */
    public static enum ReloadType {
        /**
         * 不刷新
         */
        NONE,
        /**
         * 自动刷新
         */
        AUTO
    }
}
