package com.chua.starter.swagger.support;

import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

/**
 * 配置
 *
 * @author CH
 */
@Data
@ConfigurationProperties(prefix = "plugin.swagger")
public class Knife4jProperties {


    private List<Knife4j> knife4j;
    /**
     * 是否开启swagger注解记录用户操作日志
     */
    private boolean log;

    @Data
    @Accessors(chain = true)
    public static class Knife4j {
        /**
         * 描述
         */
        private String description = "无";
        /**
         * 版本
         */
        private String version = "1.0";
        /**
         * 分组名
         */
        private String groupName;
        /**
         * basePackage
         */
        private String basePackage;
    }
}
