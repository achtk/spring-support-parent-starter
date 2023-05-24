package com.chua.starter.common.support.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * 校验码
 *
 * @author CH
 */
@Data
@ConfigurationProperties(prefix = CaptchaProperties.PRE, ignoreInvalidFields = true)
public class CaptchaProperties {

    public static final String PRE = "plugin.captcha";

    /**
     * 是否开启
     */
    private boolean enable = true;
    /**
     * 命名空间
     */
    private String contextPath;
    /**
     * 是否有边框，默认为yes，可选yes、no
     */
    private String border = "";

    /**
     * 边框颜色
     */
    private String borderColor = "";
    /**
     * 文本
     */
    private TextProperties text = new TextProperties();
    /**
     * 干扰线
     */
    private NoiseProperties noise = new NoiseProperties();


    @Data
    public static class NoiseProperties {
        /**
         * 实现
         */
        private String impl = "com.google.code.kaptcha.impl.NoNoise";
        /**
         * 颜色
         */
        private String color = "";
    }

    @Data
    public static class TextProperties {
        /**
         * 字体
         */
        private FontProperties font = new FontProperties();
        /**
         * 字符
         */
        private CharProperties chars = new CharProperties();
    }


    @Data
    public static class CharProperties {
        /**
         * 长度
         */
        private int length = 4;

        /**
         * 字符集
         */
        private String string = "1234567890";
        /**
         * 间距
         */
        private int space = 4;
    }

    @Data
    public static class FontProperties {
        /**
         * 颜色
         */
        private String color = "";
        /**
         * 文本字符大小
         */
        private int size = 4;
        /**
         * 文本字体样式
         */
        private String names = "";
    }
}
