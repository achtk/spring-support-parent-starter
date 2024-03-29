package com.chua.socketio.support.configuration;

import com.chua.socketio.support.SocketIOListener;
import com.chua.socketio.support.properties.SocketIoProperties;
import com.chua.socketio.support.server.DelegateSocketIOServer;
import com.chua.socketio.support.session.DelegateSocketSessionFactory;
import com.chua.socketio.support.session.SocketSessionTemplate;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketConfig;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.corundumstudio.socketio.protocol.JacksonJsonSupport;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import java.util.List;

/**
 * socket.io配置
 *
 * @author CH
 */
@Slf4j
@EnableConfigurationProperties(SocketIoProperties.class)
public class SocketConfiguration {


    @Bean
    @ConditionalOnMissingBean
    @ConditionalOnProperty(prefix = SocketIoProperties.PRE, name = "open", havingValue = "true", matchIfMissing = false)
    public SocketSessionTemplate socketSessionFactory() {
        return new DelegateSocketSessionFactory();
    }
    @Bean
    @ConditionalOnMissingBean
    @ConditionalOnProperty(prefix = SocketIoProperties.PRE, name = "open", havingValue = "true", matchIfMissing = false)
    public DelegateSocketIOServer socketIOServer(Configuration configuration, List<SocketIOListener> listenerList) {
        DelegateSocketIOServer socketIOServer = new DelegateSocketIOServer(configuration);
        //添加事件监听器
        for (SocketIOListener socketIOListener : listenerList) {
            if(socketIOListener instanceof DisconnectListener) {
                socketIOServer.addDisconnectListener((DisconnectListener) socketIOListener);
                continue;
            }

            if(socketIOListener instanceof ConnectListener) {
                socketIOServer.addConnectListener((ConnectListener) socketIOListener);
                continue;
            }
            socketIOServer.addListeners(socketIOListener);
        }
        return socketIOServer;
    }
    @Bean
    @ConditionalOnMissingBean
    @ConditionalOnProperty(prefix = SocketIoProperties.PRE, name = "open", havingValue = "true", matchIfMissing = false)
    public Configuration configuration(SocketIoProperties properties) {
        SocketConfig socketConfig = new SocketConfig();
        socketConfig.setReuseAddress(true);
        socketConfig.setTcpNoDelay(true);
        socketConfig.setSoLinger(0);

        com.corundumstudio.socketio.Configuration configuration = new com.corundumstudio.socketio.Configuration();
        configuration.setSocketConfig(socketConfig);
        configuration.setAddVersionHeader(true);
        configuration.setWebsocketCompression(true);
        configuration.setHttpCompression(true);
        configuration.setJsonSupport(new JacksonJsonSupport());
        // host在本地测试可以设置为localhost或者本机IP，在Linux服务器跑可换成服务器IP
        configuration.setHostname(properties.getHost());
        configuration.setPort(properties.getPort());
        // socket连接数大小（如只监听一个端口boss线程组为1即可）
        configuration.setBossThreads(properties.getBossCount());
        configuration.setWorkerThreads(properties.getBossCount());
        configuration.setAllowCustomRequests(properties.isAllowCustomRequests());
        // 协议升级超时时间（毫秒），默认10秒。HTTP握手升级为ws协议超时时间
        configuration.setUpgradeTimeout(properties.getUpgradeTimeout());
        // Ping消息超时时间（毫秒），默认60秒，这个时间间隔内没有接收到心跳消息就会发送超时事件
        configuration.setPingTimeout(properties.getPingTimeout());
        // Ping消息间隔（毫秒），默认25秒。客户端向服务器发送一条心跳消息间隔
        configuration.setPingInterval(properties.getPingInterval());

        return configuration;
    }
}
