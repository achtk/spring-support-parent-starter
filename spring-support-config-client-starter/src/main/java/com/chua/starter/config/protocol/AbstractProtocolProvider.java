package com.chua.starter.config.protocol;

import com.chua.common.support.crypto.Codec;
import com.chua.common.support.function.NamedThreadFactory;
import com.chua.common.support.json.Json;
import com.chua.common.support.spi.ServiceProvider;
import com.chua.common.support.utils.ClassUtils;
import com.chua.common.support.utils.MapUtils;
import com.chua.common.support.utils.StringUtils;
import com.chua.common.support.utils.ThreadUtils;
import com.chua.starter.common.support.constant.Constant;
import com.chua.starter.config.constant.ConfigConstant;
import com.chua.starter.config.entity.PluginMeta;
import com.chua.starter.config.properties.ConfigProperties;
import com.google.common.base.Strings;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.boot.context.properties.bind.Binder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.core.env.ConfigurableEnvironment;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Consumer;

import static com.chua.starter.config.constant.ConfigConstant.APPLICATION_SUBSCRIBE;

/**
 * 协议
 *
 * @author CH
 * @since 2022/7/30 12:07
 */
@Slf4j
public abstract class AbstractProtocolProvider implements ProtocolProvider, ApplicationContextAware, Constant, AutoCloseable {

    private ConfigurableEnvironment environment;



    protected final AtomicBoolean run = new AtomicBoolean(true);
    private final AtomicInteger count = new AtomicInteger(0);
    protected final AtomicBoolean connect = new AtomicBoolean(false);

    protected final ExecutorService beat = new ThreadPoolExecutor(1, 1,
            0L, TimeUnit.MILLISECONDS,
            new LinkedBlockingQueue<Runnable>(), new NamedThreadFactory("config-beat"));

    private final ExecutorService reconnect = new ThreadPoolExecutor(1, 1,
            0L, TimeUnit.MILLISECONDS,
            new LinkedBlockingQueue<Runnable>(), new NamedThreadFactory("config-reconnect"));
    private ApplicationContext applicationContext;
    protected ConfigProperties configProperties;
    protected PluginMeta meta;


    private final List<CacheMeta> cacheMetaList = new CopyOnWriteArrayList<>();
    private final Map<String, CacheMeta> cacheMetaFailureList = new ConcurrentHashMap<>();

    @Override
    public void subscribe(String subscribe, String dataType, Map<String, Object> data, Consumer<Map<String, Object>> consumer) {
        CacheMeta cacheMeta = new CacheMeta(subscribe, dataType, data, consumer);
        this.cacheMetaList.add(cacheMeta);
        Codec encrypt = ServiceProvider.of(Codec.class).getExtension(configProperties.getEncrypt());
        renderBase(data);
        //注册配置到配置中心
        String encode = encrypt.encodeHex(Json.toJson(data), StringUtils.defaultString(configProperties.getKey(), DEFAULT_SER));
        String body = null;
        try {
            body = register(encode, dataType);
            this.cacheMetaFailureList.remove(dataType + subscribe);
        } catch (Exception e) {
            log.warn(e.getMessage());
        }

        if(StringUtils.isNotBlank(subscribe)) {
            try {
                data.put(APPLICATION_SUBSCRIBE, subscribe);
                encode = encrypt.encodeHex(Json.toJson(data), StringUtils.defaultString(configProperties.getKey(), DEFAULT_SER));
                body = subscribe(encode, dataType);
                this.cacheMetaFailureList.remove(dataType + subscribe);
            } catch (Exception e) {
                log.warn(e.getMessage());
            }
        }

        if (Strings.isNullOrEmpty(body)) {
            log.info("注册中心连接异常");
            connect.set(false);
            this.cacheMetaFailureList.put(dataType + subscribe, cacheMeta);
            return;
        }
        log.info("注册中心连接成功");

        //注册成功获取可以读取的配置文件
        try {
            Map<String, Object> stringObjectMap = Json.toMapStringObject(body);
            String decode = encrypt.decodeHex(MapUtils.getString(stringObjectMap, "data"), meta.getCk());
            Map<String, Object> stringObjectMap1 = Json.toMapStringObject(decode);
            //beat();
            for (Map.Entry<String, Object> entry : stringObjectMap1.entrySet()) {
                String key = entry.getKey();
                if (!key.endsWith(".data")) {
                    continue;
                }

                Map<String, Object> value = (Map<String, Object>) entry.getValue();
                consumer.accept(value);

            }
        } catch (Exception ignored) {
        }
    }

    /**
     * 登记
     * 发送信息
     *
     * @param encode   数据
     * @param dataType 数据类型
     * @return 响应
     */
    protected abstract String register(String encode, String dataType);
    /**
     * 登记
     * 发送信息
     *
     * @param encode   数据
     * @param dataType 数据类型
     * @return 响应
     */
    protected abstract String subscribe(String encode, String dataType);

    /**
     * 心跳
     */
    abstract protected void beat();


    @Override
    public void destroy() throws Exception {
        close();
        connect.set(true);
        run.set(false);
        Map<String, Object> rs = new HashMap<>(3);

        Codec provider = ServiceProvider.of(Codec.class).getExtension(configProperties.getEncrypt());
        rs.put(ConfigConstant.APPLICATION_HOST, Optional.ofNullable(configProperties.getBindIp()).orElse(PluginMeta.getHostIp()));
        rs.put(ConfigConstant.APPLICATION_PORT, meta.getPort());
        rs.put(ConfigConstant.KEY, (meta.createKey()));
        rs.put(ConfigConstant.APPLICATION_NAME, meta.getApplicationName());
        String encode = provider.encodeHex(Json.toJson(rs), StringUtils.defaultString(configProperties.getKey(), DEFAULT_SER));
        try {
            for (CacheMeta cacheMeta : cacheMetaList) {
                sendDestroy(encode, cacheMeta.getDataType());
            }
            ThreadUtils.sleepSecondsQuietly(1);
        } catch (Throwable e) {
            log.warn(e.getMessage());
        }

        beat.shutdownNow();
        reconnect.shutdownNow();
        log.error("注册中心注销成功");
    }

    /**
     * 发送销毁
     * 注销
     *
     * @param encode   数据
     * @param dataType 数据类型
     * @return 注销
     */
    protected abstract String sendDestroy(String encode, String dataType);

    /**
     * 启动
     */
    protected abstract void start();

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (this.applicationContext != null) {
            return;
        }
        this.applicationContext = applicationContext;
        this.environment = (ConfigurableEnvironment) applicationContext.getEnvironment();
        configProperties = Binder.get(applicationContext.getEnvironment()).bindOrCreate(ConfigProperties.PRE, ConfigProperties.class);
        this.meta = new PluginMeta(configProperties, (ConfigurableEnvironment) applicationContext.getEnvironment());
        if (meta.isLimit()) {
            return;
        }

        if (isStart()) {
            return;
        }
        start();
        reconnect();
        beat();
    }

    abstract boolean isStart();


    protected void reconnect() {
        reconnect.execute(() -> {
            while (run.get()) {
                ThreadUtils.sleepSecondsQuietly(30);
                if (!connect.get()) {
                    if (cacheMetaFailureList.isEmpty()) {
                        continue;
                    }
                    log.warn("开始重连注册中心");
                    for (CacheMeta cacheMeta : cacheMetaFailureList.values()) {
                        this.subscribe(cacheMeta.subscribe, cacheMeta.dataType, cacheMeta.getData(), cacheMeta.getConsumer());
                    }
                }
            }
        });
    }

    @Override
    public void afterPropertiesSet() throws Exception {
    }

    @Override
    public PluginMeta getMeta() {
        return meta;
    }

    /**
     * 渲染基础数据
     *
     * @param req 请求
     */
    protected void renderBase(Map<String, Object> req) {
        req.put(ConfigConstant.APPLICATION_HOST, meta.getHost());
        req.put(ConfigConstant.APPLICATION_PORT, meta.getPort());
        req.put(ConfigConstant.SPRING_PORT, environment.getProperty("server.port", ""));

        req.put(ConfigConstant.PROFILE, environment.getProperty("spring.profiles.active", "dev"));
        req.put(ConfigConstant.KEY, (meta.createKey()));
        req.put(ConfigConstant.CONTEXT_PATH, environment.getProperty("server.servlet.context-path", environment.getProperty("server.servlet.contextPath", "")));
        req.put(ConfigConstant.REFRESH, configProperties.isAutoRefresh());
        if(ClassUtils.isPresent("org.springframework.boot.actuate.endpoint.web.servlet.WebMvcEndpointHandlerMapping")) {
            req.put(ConfigConstant.ACTUATOR, environment.getProperty("management.context-path",
                    environment.getProperty("management.context-path",
                            environment.getProperty("management.endpoints.base-path",
                            environment.getProperty("management.endpoints.basePath", "/actuator")))));
        }
    }

    @Data
    @AllArgsConstructor
    private class CacheMeta {
        private String subscribe;
        private String dataType;
        private Map<String, Object> data;
        private Consumer<Map<String, Object>> consumer;
    }
}
