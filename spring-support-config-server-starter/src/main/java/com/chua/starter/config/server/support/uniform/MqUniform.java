package com.chua.starter.config.server.support.uniform;

import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.JSONObject;
import com.chua.common.support.annotations.Spi;
import com.chua.common.support.lang.date.DateTime;
import com.chua.common.support.lang.store.FileStore;
import com.chua.common.support.lang.store.NioFileStore;
import com.chua.common.support.utils.StringUtils;
import com.chua.starter.config.constant.ConfigConstant;
import com.chua.starter.config.server.support.properties.ConfigUniformProperties;
import org.zbus.broker.Broker;
import org.zbus.broker.BrokerConfig;
import org.zbus.broker.SingleBroker;
import org.zbus.mq.Consumer;
import org.zbus.mq.MqConfig;
import org.zbus.mq.Protocol;
import org.zbus.mq.server.MqServer;
import org.zbus.mq.server.MqServerConfig;
import org.zbus.net.http.Message;

import java.io.IOException;

/**
 * 统一检测中心
 *
 * @author CH
 */
@Spi("mq")
public class MqUniform implements Uniform, Consumer.ConsumerHandler {

    final MqServer mqServer;
    private final ConfigUniformProperties configUniformProperties;
    private Consumer consumer;

    final FileStore fileStore ;


    public MqUniform(ConfigUniformProperties configUniformProperties) {
        this.fileStore = new NioFileStore(configUniformProperties.getStore(), configUniformProperties.getStoreConfig());
        this.configUniformProperties = configUniformProperties;
        MqServerConfig mqServerConfig = new MqServerConfig();
        mqServerConfig.setServerHost(configUniformProperties.getHost());
        mqServerConfig.setServerPort(configUniformProperties.getPort());
        this.mqServer = new MqServer(mqServerConfig);
    }

    @Override
    public void start() {
        try {
            mqServer.start();
        } catch (Exception ignored) {
        }
        try {

            BrokerConfig config = new BrokerConfig();
            config.setBrokerAddress(configUniformProperties.getHost() + ":" + configUniformProperties.getPort());
            Broker broker = new SingleBroker(config);
            MqConfig mqConfig = new MqConfig();
            mqConfig.setBroker(broker);
            mqConfig.setMode(Protocol.MqMode.MQ);
            mqConfig.setMq(configUniformProperties.getEndpoint());
            this.consumer = new Consumer(mqConfig);
            consumer.onMessage(this);
            consumer.start();
        } catch (Exception ignored) {
        }
    }

    @Override
    public void stop() {
        try {
            mqServer.close();
        } catch (IOException ignored) {
        }
        try {
            consumer.close();
        } catch (IOException ignored) {
        }

        try {
            fileStore.close();
        } catch (Exception ignored) {
        }
    }

    @Override
    public void handle(Message msg, Consumer consumer) throws IOException {
        JSONObject jsonObject = JSON.parseObject(msg.getBody());
        String applicationName = jsonObject.getString(ConfigConstant.UNIFORM_APPLICATION_NAME);
        if (StringUtils.isEmpty(applicationName)) {
            return;
        }
        String mode = jsonObject.getString(ConfigConstant.UNIFORM_MODE);
        String message = jsonObject.getString(ConfigConstant.UNIFORM_MESSAGE);
        fileStore.write(StringUtils.format("[{}] [{}] [{}] {}", DateTime.now().toStandard(), applicationName, mode, message), applicationName, mode);
        System.out.println();
    }
}
