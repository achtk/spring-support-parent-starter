package com.chua.starter.oss.support.configuration;

import com.chua.common.support.log.Log;
import com.chua.starter.common.support.annotations.EnableAutoTable;
import com.chua.starter.oss.support.pojo.SysOss;
import com.chua.starter.oss.support.properties.OssProperties;
import com.chua.starter.oss.support.provider.OssProvider;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.BeansException;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.context.properties.bind.Binder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Lazy;

/**
 * 自动建表
 *
 * @author CH
 * @since 2022/8/1 17:07
 */
@AutoConfigureAfter(DataSourceAutoConfiguration.class)
@EnableConfigurationProperties(OssProperties.class)
@EnableAutoTable(packageType = SysOss.class)
@MapperScan("com.chua.starter.oss.support.mapper")
@ComponentScan("com.chua.starter.oss.support.service")
@Lazy
public class OssConfiguration implements ApplicationContextAware{

    private static final Log log = Log.getLogger(OssConfiguration.class);
    OssProperties ossProperties;
    private ApplicationContext applicationContext;

    @Bean
    @ConditionalOnMissingBean
    @ConditionalOnProperty(prefix = "plugin.oss", name = "open", havingValue = "true", matchIfMissing = true)
    public OssProvider ossProvider() {
        return new OssProvider();
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
        ossProperties = Binder.get(applicationContext.getEnvironment()).bindOrCreate(OssProperties.PRE, OssProperties.class);

    }


}
