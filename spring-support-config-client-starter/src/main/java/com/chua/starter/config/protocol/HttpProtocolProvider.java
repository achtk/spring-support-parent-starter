package com.chua.starter.config.protocol;

import com.alibaba.fastjson2.JSON;
import com.chua.common.support.annotations.Spi;
import com.chua.common.support.collection.ImmutableBuilder;
import com.chua.common.support.crypto.Codec;
import com.chua.common.support.json.Json;
import com.chua.common.support.spi.ServiceProvider;
import com.chua.common.support.utils.StringUtils;
import com.chua.common.support.utils.ThreadUtils;
import com.chua.starter.config.constant.ConfigConstant;
import com.chua.starter.config.entity.CommandRequest;
import com.chua.starter.config.entity.KeyValue;
import com.chua.starter.config.event.Event;
import com.chua.starter.config.plugin.Plugin;
import com.google.common.base.Strings;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServer;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.http.HttpServerResponse;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RestController;

import static com.chua.common.support.http.HttpClientUtils.APPLICATION_JSON;

/**
 * 协议
 *
 * @author CH
 * @since 2022/7/30 12:07
 */
@Slf4j
@RestController
@Spi("http")
public class HttpProtocolProvider extends AbstractProtocolProvider implements Handler<HttpServerRequest> {

    private final Vertx vertx = Vertx.vertx();
    private HttpServer httpServer;

    @Override
    public String[] named() {
        return new String[]{"http"};
    }

    @Override
    protected String register(String encode, String dataType) {
        HttpResponse<String> response = null;
        try {
            CommandRequest commandRequest = new CommandRequest();
            commandRequest.setDataType(dataType);
            commandRequest.setApplicationName(meta.getApplicationName());
            commandRequest.setApplicationProfile(meta.getProfile());
            commandRequest.setData(encode);
            response = Unirest.post(named()[0] + "://" + configProperties.getConfigAddress().concat("/config/register"))
                    .body(Json.toJson(commandRequest))
                    .contentType(APPLICATION_JSON)
                    .asString();
        } catch (Throwable e) {
            log.warn(e.getMessage());
            return null;
        }

        if(null == response || response.getStatus() != 200) {
            return null;
        }

        return response.getBody();
    }

    @Override
    protected String subscribe(String encode, String dataType) {
        HttpResponse<String> response = null;
        CommandRequest commandRequest = new CommandRequest();
        commandRequest.setDataType(dataType);
        commandRequest.setApplicationName(meta.getApplicationName());
        commandRequest.setApplicationProfile(meta.getProfile());
        commandRequest.setData(encode);
        try {
            response = Unirest.post(named()[0] + "://" + configProperties.getConfigAddress().concat("/config/subscribe"))
                    .body(Json.toJson(commandRequest))
                    .contentType(APPLICATION_JSON)
                    .asString();
        } catch (Throwable e) {
            log.warn(e.getMessage());
            return null;
        }

        if (null == response || response.getStatus() != 200) {
            return null;
        }

        return response.getBody();
    }

    @Override
    protected String sendDestroy(String encode, String dataType) {
        HttpResponse<String> response = null;
        CommandRequest commandRequest = new CommandRequest();
        commandRequest.setDataType(dataType);
        commandRequest.setApplicationName(meta.getApplicationName());
        commandRequest.setApplicationProfile(meta.getProfile());
        commandRequest.setData(encode);
        try {
            response = Unirest.post(named()[0] + "://" +
                            configProperties.getConfigAddress().concat("/config/unregister"))
                    .contentType(APPLICATION_JSON)
                    .body(Json.toJson(commandRequest))
                    .asString();
        } catch (Throwable e) {
            log.warn(e.getMessage());
        }

        if (null == response || response.getStatus() != 200) {
            log.error("注册中心注销失败");
            return null;
        }

        return "success";
    }

    @Override
    protected void start() {
        this.httpServer = vertx.createHttpServer();
        this.httpServer.requestHandler(this);
        this.httpServer.listen(meta.getPort(), meta.getHost());
    }

    @Override
    boolean isStart() {
        return null != this.httpServer;
    }

    static final String MAPPING = "/config/listener";

    @Override
    public void handle(HttpServerRequest request) {
        String uri = request.uri();
        if (!uri.startsWith(MAPPING)) {
            HttpServerResponse response = request.response();
            //设置响应头
            response.putHeader("Content-type", "application/json;charset=utf-8");
            // 响应数据
            response.end("不支持");
            return;
        }
        HttpServerResponse response = request.response();

        String event2 = StringUtils.startWithMove(uri.replace(MAPPING, ""), "/");
        Event plugin1 = ServiceProvider.of(Event.class).getExtension(event2);
        if(null != plugin1) {
            if(log.isDebugEnabled()) {
                log.debug("监听到数据: {}", event2);
            }
            //设置响应头
            response.putHeader("Content-type", "application/json;charset=utf-8");
            plugin1.onListener(response);
            return;
        }


        request.body(event -> {
            String data = event.result().toString().replace("data=", "");
            //服务端主动发起信息
            Codec provider = ServiceProvider.of(Codec.class).getExtension(configProperties.getEncrypt());
            String decode = provider.decodeHex(data, StringUtils.defaultString(configProperties.getKey(), DEFAULT_SER));
            if (Strings.isNullOrEmpty(decode)) {
                log.warn("参数无法解析");
                return;
            }

            KeyValue keyValue = JSON.parseObject(decode, KeyValue.class);
            if (null == keyValue) {
                log.warn("参数无法解析");
                return;
            }

            String event1 = keyValue.getDataType();
            log.info("配置{} -> {}", keyValue.getDataId(), keyValue.getData());
            Plugin plugin = ServiceProvider.of(Plugin.class).getExtension(event1);
            if (null != plugin) {
                log.info("监听到数据: {}", event1);
                plugin.onListener(keyValue, response);
            }
        });

        //设置响应头
        response.putHeader("Content-type", "application/json;charset=utf-8");
        // 响应数据
        response.end("");

    }


    @Override
    public void listener(String data) {

    }


    /**
     * 心跳
     */
    protected void beat() {
        String configName = meta.getApplicationName();
        beat.execute(() -> {
            while (run.get()) {
                try {

                    ThreadUtils.sleepSecondsQuietly(60);
                    HttpResponse<String> response = Unirest.post(named()[0] + "://" + configProperties.getConfigAddress().concat("/config/beat"))
                            .contentType(APPLICATION_JSON)
                            .body(Json.toJson(ImmutableBuilder.builderOfStringMap()
                                    .put(ConfigConstant.APPLICATION_DATA, "")
                                    .put(ConfigConstant.APPLICATION_DATA_TYPE, ConfigConstant.CONFIG)
                                    .put(ConfigConstant.APPLICATION_NAME, configName)
                                    .put(ConfigConstant.PROFILE, meta.getProfile())
                                    .build()
                            ))
                            .asString();
                    if (null != response && response.getStatus() == 200) {
                        if (log.isDebugEnabled()) {
                            log.debug("{}心跳包正常", configName);
                        }
                        continue;
                    }
                } catch (Throwable e) {
                    log.warn(e.getMessage());
                }
                if (log.isWarnEnabled()) {
                    log.warn("{}心跳包异常开始重连", configName);
                    connect.set(false);
                }
            }
        });
    }

    @Override
    public void close() throws Exception {
        try {
            this.httpServer.close();
        } catch (Exception ignored) {
        }
        try {
            vertx.close();
        } catch (Exception ignored) {
        }
    }

}
