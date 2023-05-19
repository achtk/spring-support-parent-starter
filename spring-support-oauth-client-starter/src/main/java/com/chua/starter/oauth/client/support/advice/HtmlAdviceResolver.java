package com.chua.starter.oauth.client.support.advice;

import com.chua.common.support.lang.robin.Node;
import com.chua.common.support.lang.robin.Robin;
import com.chua.common.support.spi.ServiceProvider;
import com.chua.starter.common.support.configuration.SpringBeanUtils;
import com.chua.starter.common.support.utils.RequestUtils;
import com.chua.starter.oauth.client.support.exception.OauthException;
import com.chua.starter.oauth.client.support.properties.AuthClientProperties;
import com.google.common.base.Strings;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;

/**
 * html
 *
 * @author CH
 * @since 2022/7/29 10:24
 */
@Slf4j
public class HtmlAdviceResolver implements AdviceResolver {

    @Override
    public String type() {
        return MediaType.TEXT_HTML_VALUE;
    }

    @Override
    public Object resolve(HttpServletResponse response, Integer status, String message) throws IOException {
        return null;
    }

    @Override
    public boolean isHtml() {
        return true;
    }

    /**
     * html
     *
     * @param request        请求
     * @param response       响应
     * @param code           错误码
     * @param authProperties 参数
     */
    public void resolve(HttpServletRequest request, HttpServletResponse response, int code, AuthClientProperties authProperties) {
        String url1 = authProperties.getLoginPage();
        if (code == 403) {
            url1 = authProperties.getNoPermissionPage();
        }
        if (isLocalhost(request)) {
            try {
                response.sendRedirect(url1);
            } catch (IOException e) {
                e.printStackTrace();
            }
            return;
        }

        Robin<String> balance1 = ServiceProvider.of(Robin.class).getExtension(authProperties.getBalance());
        Robin<String> robin1 = balance1.create();
        String[] split = SpringBeanUtils.getApplicationContext().getEnvironment().resolvePlaceholders(authProperties.getLoginAddress()).split(",");
        robin1.addNode(split);

        Node<String> robin = robin1.selectNode();
        String address = robin.getContent();

        String queryString = request.getQueryString();
        String toString = request.getRequestURL().toString();
        if (!Strings.isNullOrEmpty(queryString)) {
            toString += "?" + queryString;
        }

        try {
            String encode = URLEncoder.encode(toString, "UTF-8");
            String url = address;
            if (Strings.isNullOrEmpty(url)) {
                log.error("登录地址不存在");
                throw new OauthException();
            }
            if (!url.startsWith("http")) {
                url = "http://" + url;
            }
            response.sendRedirect(url + url1 + "?redirect_url=" + encode);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 是否本地
     *
     * @param request 请求
     * @return 是否本地
     */
    private boolean isLocalhost(HttpServletRequest request) {
        String ipAddress = RequestUtils.getIpAddress(request);
        return null == ipAddress || "localhost".equalsIgnoreCase(ipAddress) || "127.0.0.1".equalsIgnoreCase(ipAddress);
    }
}
