package com.chua.starter.oauth.client.support.execute;

import com.chua.common.support.crypto.decode.KeyDecode;
import com.chua.common.support.crypto.encode.KeyEncode;
import com.chua.common.support.crypto.utils.DigestUtils;
import com.chua.common.support.json.Json;
import com.chua.common.support.lang.exception.AuthenticationException;
import com.chua.common.support.lang.robin.Node;
import com.chua.common.support.lang.robin.Robin;
import com.chua.common.support.spi.ServiceProvider;
import com.chua.common.support.utils.Md5Utils;
import com.chua.common.support.utils.StringUtils;
import com.chua.starter.common.support.application.Binder;
import com.chua.starter.common.support.configuration.SpringBeanUtils;
import com.chua.starter.common.support.result.ReturnResult;
import com.chua.starter.common.support.watch.Watch;
import com.chua.starter.oauth.client.support.advice.def.DefSecret;
import com.chua.starter.oauth.client.support.contants.AuthConstant;
import com.chua.starter.oauth.client.support.entity.AuthRequest;
import com.chua.starter.oauth.client.support.enums.AuthType;
import com.chua.starter.oauth.client.support.enums.LogoutType;
import com.chua.starter.oauth.client.support.infomation.AuthenticationInformation;
import com.chua.starter.oauth.client.support.properties.AuthClientProperties;
import com.chua.starter.oauth.client.support.user.LoginAuthResult;
import com.chua.starter.oauth.client.support.user.UserResult;
import com.chua.starter.oauth.client.support.user.UserResume;
import com.chua.starter.oauth.client.support.web.WebRequest;
import com.google.common.base.Strings;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import kong.unirest.UnirestException;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;

import static com.chua.common.support.http.HttpClientUtils.APPLICATION_JSON;
import static com.chua.starter.common.support.result.ReturnCode.OK;
import static com.chua.starter.oauth.client.support.contants.AuthConstant.ACCESS_KEY;
import static com.chua.starter.oauth.client.support.contants.AuthConstant.SECRET_KEY;

/**
 * 鉴权客户端操作
 *
 * @author CH
 */
public class AuthClientExecute {

    private final AuthClientProperties authClientProperties;
    private final KeyEncode encode;
    private final KeyDecode decode;

    public static final AuthClientExecute INSTANCE = new AuthClientExecute();

    public static AuthClientExecute getInstance() {
        return INSTANCE;
    }

    public AuthClientExecute() {
        this.authClientProperties = Binder.binder(AuthClientProperties.PRE, AuthClientProperties.class);
        this.encode = ServiceProvider.of(KeyEncode.class).getExtension(authClientProperties.getEncryption());
        this.decode = ServiceProvider.of(KeyDecode.class).getExtension(authClientProperties.getEncryption());
    }

    /**
     * 获取UserResult
     *
     * @return token
     */
    public UserResult getUserResult() {
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return null;
        }

        ServletRequestAttributes attributes = (ServletRequestAttributes) requestAttributes;
        HttpServletRequest request = attributes.getRequest();
        WebRequest webRequest1 = new WebRequest(
                authClientProperties,
                request, null);

        UserResult userResult = new UserResult();
        AuthenticationInformation authentication = webRequest1.authentication();
        UserResume returnResult = authentication.getReturnResult();
        if (null == returnResult) {
            throw new AuthenticationException("请重新登录");
        }
        com.chua.common.support.bean.BeanUtils.copyProperties(returnResult, userResult);
        return userResult;
    }

    /**
     * 登出
     *
     * @param logoutType 账号类型
     * @return token
     */
    public LoginAuthResult logout(String uid, LogoutType logoutType) {
        AuthType authType = null;
        String oauthUrl = authClientProperties.getAuthAddress();
        if(StringUtils.isEmpty(oauthUrl)) {
            authType = AuthType.EMBED;
        }

        if(authType == AuthType.EMBED) {
            return new LoginAuthResult(200, "");
        }

        if (Strings.isNullOrEmpty(uid) && logoutType == LogoutType.UN_REGISTER) {
            return new LoginAuthResult(400, "uid不能为空");
        }

        UserResult userResult = getUserResult();
        String resultUid = userResult.getUid();

        String accessKey = authClientProperties.getAccessKey();
        String secretKey = authClientProperties.getSecretKey();
        String serviceKey = authClientProperties.getServiceKey();
        String key = UUID.randomUUID().toString();

        if (Strings.isNullOrEmpty(accessKey) || Strings.isNullOrEmpty(secretKey)) {
            accessKey = DefSecret.ACCESS_KEY;
            secretKey = DefSecret.SECRET_KEY;
        }

        Map<String, Object> jsonObject = new HashMap<>(2);
        jsonObject.put(ACCESS_KEY, accessKey);
        jsonObject.put("uid", Strings.isNullOrEmpty(uid) ? resultUid : uid);
        jsonObject.put(SECRET_KEY, secretKey);

        String asString = Json.toJson(jsonObject);
        String request = encode.encodeHex(asString, DigestUtils.md5Hex(key));

        String uidKey = UUID.randomUUID().toString();
        Map<String, Object> item2 = new HashMap<>(3);
        item2.put(AuthConstant.OAUTH_VALUE, request);
        item2.put(AuthConstant.OAUTH_KEY, key);
        item2.put("x-oauth-uid", uidKey);
        request = encode.encodeHex(Json.toJson(item2), serviceKey);
        Robin robin = ServiceProvider.of(Robin.class).getExtension(authClientProperties.getBalance());
        Robin robin1 = robin.create();
        String[] split = SpringBeanUtils.getApplicationContext().getEnvironment().resolvePlaceholders(authClientProperties.getAuthAddress()).split(",");
        robin1.addNode(split);
        Node node = robin1.selectNode();
        HttpResponse<String> httpResponse = null;
        try {
            String url = node.getString();
            if (null == url) {
                return null;
            }

            AuthRequest request1 = new AuthRequest();
            request1.setData(request);
            request1.setType(logoutType.name());
            httpResponse = Unirest.post(
                            StringUtils.endWithAppend(StringUtils.startWithAppend(url, "http://"), "/")
                                    + "logout")
                    .header("accept", "application/json")
                    .header("x-oauth-timestamp", System.nanoTime() + "")
                    .contentType(APPLICATION_JSON)
                    .body(Json.toJson(request1))
                    .asString();

        } catch (UnirestException ignored) {
        }

        if (null == httpResponse) {
            return null;
        }

        int status = httpResponse.getStatus();
        if (status == 200) {
            LoginAuthResult loginAuthResult = new LoginAuthResult();
            loginAuthResult.setCode(status);

            return loginAuthResult;
        }
        LoginAuthResult loginAuthResult = new LoginAuthResult();
        loginAuthResult.setCode(status);
        loginAuthResult.setMessage("认证服务器异常");
        return loginAuthResult;

    }

    /**
     * 获取token
     *
     * @param username 账号
     * @param password 密码
     * @param authType 账号类型
     * @param ext      额外参数
     * @return token
     */
    @Watch
    public LoginAuthResult getAccessToken(String username, String password, AuthType authType, Map<String, Object> ext) {
        String oauthUrl = authClientProperties.getAuthAddress();
        if(StringUtils.isEmpty(oauthUrl)) {
            authType = AuthType.EMBED;
        }

        if(authType == AuthType.EMBED) {
            return newLoginAuthResult(username, password);
        }

        String accessKey = authClientProperties.getAccessKey();
        String secretKey = authClientProperties.getSecretKey();
        String serviceKey = authClientProperties.getServiceKey();
        String key = UUID.randomUUID().toString();

        if (Strings.isNullOrEmpty(accessKey) || Strings.isNullOrEmpty(secretKey)) {
            accessKey = DefSecret.ACCESS_KEY;
            secretKey = DefSecret.SECRET_KEY;
        }

        Map<String, Object> jsonObject = new HashMap<>(2);
        jsonObject.put(ACCESS_KEY, accessKey);
        jsonObject.put(SECRET_KEY, secretKey);

        String asString = Json.toJson(jsonObject);
        String request = encode.encodeHex(asString, DigestUtils.md5Hex(key));

        String uid = UUID.randomUUID().toString();
        Map<String, Object> item2 = new LinkedHashMap<>();
        item2.put("ext", ext);
        item2.put(AuthConstant.OAUTH_VALUE, request);
        item2.put(AuthConstant.OAUTH_KEY, key);
        item2.put("x-oauth-uid", uid);
        item2.put("password", password);
        request = encode.encodeHex(Json.toJson(item2), serviceKey);
        Robin robin1 = ServiceProvider.of(Robin.class).getExtension(authClientProperties.getBalance());
        Robin balance = robin1.create();
        String[] split = SpringBeanUtils.getApplicationContext().getEnvironment().resolvePlaceholders(authClientProperties.getAuthAddress()).split(",");
        balance.addNode(split);
        Node robin = balance.selectNode();
        HttpResponse<String> httpResponse = null;
        try {
            String url = robin.getString();
            if (null == url) {
                return null;
            }

            AuthRequest request1 = new AuthRequest();
            request1.setData(request);
            request1.setUsername(username);
            request1.setType(authType.name());
            httpResponse = Unirest.post(
                            StringUtils.endWithAppend(StringUtils.startWithAppend(url, "http://"), "/")
                                    + "doLogin")
                    .contentType(APPLICATION_JSON)
                    .header("accept", "application/json")
                    .header("x-oauth-timestamp", System.nanoTime() + "")
                    .body(Json.toJson(request1))
                    .asString();

        } catch (UnirestException ignored) {
        }

        if (null == httpResponse) {
            return null;
        }

        int status = httpResponse.getStatus();
        String body = httpResponse.getBody();
        if (status == 200) {
            ReturnResult returnResult = Json.fromJson(body, ReturnResult.class);
            String code = returnResult.getCode();
            Object data = returnResult.getData();
            if (code.equals(OK.getCode())) {
                LoginAuthResult loginAuthResult = null;
                try {
                    loginAuthResult = Json.fromJson(decode.decodeHex(data.toString(), uid), LoginAuthResult.class);
                } catch (Exception ignore) {
                }

                if (null == loginAuthResult) {
                    loginAuthResult = Json.fromJson(Json.toJson(data), LoginAuthResult.class);
                }

                if (null == loginAuthResult) {
                    return null;
                }

                loginAuthResult.setCode(status);
                return loginAuthResult;
            }
            LoginAuthResult loginAuthResult = new LoginAuthResult();
            loginAuthResult.setCode(403);
            loginAuthResult.setMessage(returnResult.getMsg());

            return loginAuthResult;
        }
        LoginAuthResult loginAuthResult = new LoginAuthResult();
        loginAuthResult.setCode(status);
        loginAuthResult.setMessage("认证服务器异常");
        return loginAuthResult;

    }

    /**
     * 新登录身份验证结果
     *
     * @param username 用户名
     * @param password 暗语
     * @return {@link LoginAuthResult}
     */
    private LoginAuthResult newLoginAuthResult(String username, String password) {
        AuthClientProperties.TempUser temp = authClientProperties.getTemp();
        LoginAuthResult loginAuthResult = new LoginAuthResult();
        if(username.equals(temp.getUser()) && password.equals(Md5Utils.getInstance().getMd5String(temp.getPassword()))) {
            loginAuthResult.setCode(200);
            UserResult userResult = new UserResult();
            userResult.setId("0");
            userResult.setAuthType(AuthType.EMBED.name());
            userResult.setUsername(username);
            loginAuthResult.setUserResult(userResult);
            loginAuthResult.setToken(DigestUtils.sha512Hex(username));
            return loginAuthResult;
        }

        loginAuthResult.setCode(403);
        loginAuthResult.setMessage("账号或密码错误");
        return loginAuthResult;

    }

    /**
     * 创建UID
     *
     * @param authType 登录方式
     * @param beanType 认证方式
     * @param password 密码
     * @param username 账号
     * @return UID
     */
    public String createUid(String beanType, String username, String password, String authType) {
        UserResult userResult = new UserResult();
        userResult.setPassword(password).setAuthType(authType).setBeanType(beanType);

        return Md5Utils.getInstance().getMd5String(userResult.getBeanType() +
                username +
                userResult.getPassword() +
                userResult.getAuthType());
    }

    /**
     * 刷新token
     */
    public void refreshToken() {
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return;
        }

        ServletRequestAttributes attributes = (ServletRequestAttributes) requestAttributes;
        HttpServletRequest request = attributes.getRequest();
        WebRequest webRequest1 = new WebRequest(
                authClientProperties,
                request, null);

        webRequest1.refreshToken();
    }

    /**
     * 登陆码
     *
     * @param loginCodeType 登录类型
     * @return 登陆码
     */
    public String getLoginCode(String loginCodeType) {
        Robin robin1 = ServiceProvider.of(Robin.class).getExtension(authClientProperties.getBalance());
        Robin balance = robin1.create();
        String[] split = SpringBeanUtils.getApplicationContext().getEnvironment().resolvePlaceholders(authClientProperties.getAuthAddress()).split(",");
        balance.addNode(split);
        Node robin = balance.selectNode();
        HttpResponse<String> httpResponse = null;
        try {
            String url = robin.getString();
            if (null == url) {
                return null;
            }


            httpResponse = Unirest.get(
                            StringUtils.endWithAppend(StringUtils.startWithAppend(url, "http://"), "/")
                                    + loginCodeType + "/loginCodeType?redirect_url=")
                    .asString();

        } catch (UnirestException ignored) {
        }

        if (null == httpResponse) {
            return null;
        }

        if (httpResponse.getStatus() != 200) {
            return null;
        }

        return httpResponse.getBody();
    }
}
