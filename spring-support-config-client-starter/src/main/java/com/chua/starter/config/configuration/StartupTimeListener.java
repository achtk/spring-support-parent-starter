package com.chua.starter.config.configuration;


import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationListener;

/**
 * 启动时间监听器
 *
 * @author CH
 * @since 2023/09/10
 */
public class StartupTimeListener implements ApplicationListener<ApplicationStartedEvent> {

    private long startupTime;

    @Override
    public void onApplicationEvent(ApplicationStartedEvent event) {
        startupTime = System.currentTimeMillis();
    }

    public long getStartupTime() {
        return startupTime;
    }
}