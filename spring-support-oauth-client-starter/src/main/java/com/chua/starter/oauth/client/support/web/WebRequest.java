package com.chua.starter.oauth.client.support.web;

import com.chua.common.support.spi.ServiceProvider;
import com.chua.common.support.utils.StringUtils;
import com.chua.starter.common.support.annotations.Ignore;
import com.chua.starter.common.support.configuration.SpringBeanUtils;
import com.chua.starter.oauth.client.support.annotation.AuthIgnore;
import com.chua.starter.oauth.client.support.enums.AuthType;
import com.chua.starter.oauth.client.support.infomation.AuthenticationInformation;
import com.chua.starter.oauth.client.support.infomation.Information;
import com.chua.starter.oauth.client.support.properties.AuthClientProperties;
import com.chua.starter.oauth.client.support.protocol.Protocol;
import com.chua.starter.oauth.client.support.user.UserResume;
import com.google.common.base.Strings;
import com.google.common.collect.Sets;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * webrequest
 *
 * @author CH
 */
@Slf4j
public class WebRequest {
    @Getter
    private final AuthClientProperties authProperties;
    private String contextPath;
    private HttpServletRequest request;
    private RequestMappingHandlerMapping requestMappingHandlerMapping;
    private static final AntPathMatcher PATH_MATCHER = new AntPathMatcher();


    public WebRequest(AuthClientProperties authProperties, HttpServletRequest request, RequestMappingHandlerMapping requestMappingHandlerMapping) {
        this.authProperties = authProperties;
        this.request = request;
        this.requestMappingHandlerMapping = requestMappingHandlerMapping;
        this.contextPath = SpringBeanUtils.getEnvironment().resolvePlaceholders("${server.servlet.context-path:}");
    }

    public WebRequest(AuthClientProperties authProperties) {
        this(authProperties, null, null);
    }

    private static final Set<HandlerMethod> PASS = new LinkedHashSet<>();

    /**
     * 是否通过
     *
     * @return 是否通过
     */
    public boolean isPass() {
        Set<String> whitelist = authProperties.getWhitelist();
        if (null == whitelist) {
            return false;
        }


        String uri = request.getRequestURI();
        uri = StringUtils.isNotBlank(contextPath) ? StringUtils.removeStart(uri, contextPath) : uri;

        for (String s : whitelist) {
            if (PATH_MATCHER.match(s, uri)) {
                return true;
            }
        }

        String authUrl = authProperties.getLoginPage();
        if (uri.equalsIgnoreCase(authUrl)) {
            return true;
        }

        String authUrl1 = authProperties.getNoPermissionPage();
        if (uri.equalsIgnoreCase(authUrl1)) {
            return true;
        }

        if (null != requestMappingHandlerMapping) {
            HandlerMethod handlerMethod = null;
            try {
                handlerMethod = (HandlerMethod) requestMappingHandlerMapping.getHandler(request).getHandler();
            } catch (Exception ignored) {
            }
            if (null != handlerMethod) {
                if (PASS.contains(handlerMethod)) {
                    return true;
                }
                Method method = handlerMethod.getMethod();
                boolean annotationPresent = method.isAnnotationPresent(AuthIgnore.class);
                if (annotationPresent) {
                    PASS.add(handlerMethod);
                    return true;
                }
                boolean annotationPresent11 = method.isAnnotationPresent(Ignore.class);
                if (annotationPresent11) {
                    PASS.add(handlerMethod);
                    return true;
                }

                boolean annotationPresent1 = handlerMethod.getBeanType().isAnnotationPresent(AuthIgnore.class);
                if (annotationPresent1) {
                    PASS.add(handlerMethod);
                    return true;
                }

                boolean annotationPresent12 = handlerMethod.getBeanType().isAnnotationPresent(Ignore.class);
                if (annotationPresent12) {
                    PASS.add(handlerMethod);
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * 鉴权失败
     *
     * @return 鉴权失败
     */
    public boolean isFailure() {
        if (Strings.isNullOrEmpty(authProperties.getLoginAddress())) {
            log.error("登录地址不存在");
            return true;
        }
        //判断cookie
        Cookie[] tokenCookie = getCookie();

        String token = getToken();

        if ((null == tokenCookie || tokenCookie.length == 0) && Strings.isNullOrEmpty(token)) {
            return true;
        }

        return false;
    }

    /**
     * 鉴权token
     *
     * @return token
     */
    private String getToken() {
        String header = request.getHeader(authProperties.getTokenName());
        return Strings.isNullOrEmpty(header) ? StringUtils.defaultString(
                request.getParameter(authProperties.getTokenName()),
                request.getAttribute(authProperties.getTokenName()) + ""
        ) : header;
    }

    /**
     * 鉴权token
     *
     * @return token
     */
    private Cookie[] getCookie() {
        return request.getCookies();
    }

    /**
     * 鉴权链路
     *
     * @param chain    链路
     * @param response 响应
     */
    public void doFailureChain(FilterChain chain, HttpServletResponse response) throws IOException, ServletException {
        WebResponse webResponse = new WebResponse(authProperties, chain, request, response);
        webResponse.doFailureChain(Information.AUTHENTICATION_FAILURE);
    }

    /**
     * 鉴权链路
     *
     * @param chain       链路
     * @param response    响应
     * @param information 状态码
     */
    public void doFailureChain(FilterChain chain, HttpServletResponse response, Information information) {
        WebResponse webResponse = new WebResponse(authProperties, chain, request, response);
        webResponse.doFailureChain(information);
    }

    /**
     * 鉴权
     *
     * @return 鉴权
     */
    public AuthenticationInformation authentication() {
        Cookie[] cookie = getCookie();
        String token = getToken();
        if (isEmbed()) {
            return newAuthenticationInformation();
        }
        Protocol protocol = ServiceProvider.of(Protocol.class).getExtension(authProperties.getProtocol());
        return protocol.approve(cookie, token);
    }

    /**
     * 新身份验证信息
     *
     * @return {@link AuthenticationInformation}
     */
    private AuthenticationInformation newAuthenticationInformation() {
        UserResume userResume = new UserResume();
        userResume.setUsername(authProperties.getTemp().getUser());
        userResume.setRoles(Sets.newHashSet("OPS"));
        userResume.setPermission(Collections.emptySet());
        return new AuthenticationInformation(Information.OK, userResume);
    }

    /**
     * 是嵌入
     *
     * @return boolean
     */
    private boolean isEmbed() {
        String oauthUrl = authProperties.getAuthAddress();
        return StringUtils.isEmpty(oauthUrl);
    }

    /**
     * 成功
     *
     * @param chain    链路
     * @param response 响应
     */
    public void doChain(FilterChain chain, HttpServletResponse response) throws IOException, ServletException {
        chain.doFilter(request, response);
    }

    /**
     * 刷新token
     */
    public void refreshToken() {
        Cookie[] cookie = getCookie();
        String token = getToken();
        Protocol protocol = ServiceProvider.of(Protocol.class).getExtension(authProperties.getProtocol());
        protocol.refreshToken(cookie, token);
    }
}
