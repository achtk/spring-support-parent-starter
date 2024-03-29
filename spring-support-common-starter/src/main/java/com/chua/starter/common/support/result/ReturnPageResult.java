package com.chua.starter.common.support.result;

import com.chua.common.support.lang.page.Page;
import com.chua.common.support.objects.definition.element.TypeDescribe;
import com.chua.common.support.utils.ClassUtils;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import static com.chua.starter.common.support.result.ReturnCode.*;


/**
 * 返回结果
 *
 * @author CH
 */
@Data
@AllArgsConstructor(staticName = "of")
@NoArgsConstructor(staticName = "of")
public class ReturnPageResult<T> {
    /**
     * http状态码
     */
    protected String code;

    /**
     * 结果
     */
    private PageResult<T> data;
    /**
     * 信息
     */
    private String msg;

    /**
     * 初始化
     *
     * @param data 数据
     * @param msg  消息
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> ok(PageResult<T> data, String msg) {
        return new ReturnPageResult<>(SUCCESS.getCode(), data, msg);
    }

    /**
     * 初始化
     *
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> noAuth() {
        return new ReturnPageResult<>(RESULT_ACCESS_UNAUTHORIZED.getCode(), null, null);
    }
    /**
     * 初始化
     *@param msg  消息
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> noAuth(String msg) {
        return new ReturnPageResult<>(RESULT_ACCESS_UNAUTHORIZED.getCode(), null, msg);
    }

    /**
     * 初始化
     *
     * @param data 数据
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> ok(PageResult<T> data) {
        return ok(data, "");
    }

    /**
     * 初始化
     *
     * @param data 数据
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> ok(Object data) {
        if (data instanceof Page) {
            return ok(PageResult.<T>builder()
                    .page(((Page<?>) data).getPageNum())
                    .pageSize(((Page<?>) data).getPageSize())
                    .data((List<T>) ((Page<?>) data).getData())
                    .total(((Page<?>) data).getTotal())
                    .totalPages(((Page<?>) data).getPages())
                    .build());
        }

        if (ClassUtils.isAssignableFrom(data, "com.baomidou.mybatisplus.core.metadata.IPage")) {
            TypeDescribe typeDescribe = TypeDescribe.create(data);
            return ok(PageResult.<T>builder()
                    .page(typeDescribe.getMethodDescribe("getCurrent").executeSelf(int.class))
                    .pageSize(typeDescribe.getMethodDescribe("getSize").executeSelf(int.class))
                    .data((List<T>) typeDescribe.getMethodDescribe("getRecords").executeSelf())
                    .total(typeDescribe.getMethodDescribe("getTotal").executeSelf(long.class))
                    .totalPages(typeDescribe.getMethodDescribe("getPages").executeSelf(int.class))
                    .build());
        }
        return ok(null, "");
    }

    /**
     * 初始化
     *
     * @param <T> 类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> ok() {
        return ok(null);
    }

    /**
     * 初始化
     *
     * @param data 数据
     * @param msg  消息
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> error(PageResult<T> data, String msg) {
        return new ReturnPageResult<>(SYSTEM_SERVER_BUSINESS.getCode(), null, msg);
    }

    /**
     * 错误
     * 初始化
     *
     * @param msg 消息
     * @return 结果
     */
    public static <T> ReturnPageResult<T> error(String msg) {
        return error(null, msg);
    }

    /**
     * 初始化
     *
     * @param data 数据
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> error(PageResult<T> data) {
        return error(data, "");
    }

    /**
     * 初始化
     *
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> error() {
        return error(null, "");
    }

    /**
     * 初始化
     *
     * @param data 数据
     * @param msg  消息
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> illegal(PageResult<T> data, String msg) {
        return new ReturnPageResult<>(PARAM_ERROR.getCode(), null, msg);
    }

    /**
     * 初始化
     *
     * @param data 数据
     * @param <T>  类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> illegal(PageResult<T> data) {
        return illegal(data, "");
    }

    /**
     * 初始化
     *
     * @param message 数据
     * @param <T>     类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> illegal(String message) {
        return illegal(null, message);
    }

    /**
     * 初始化
     *
     * @param <T> 类型
     * @return 结果
     */
    public static <T> ReturnPageResult<T> illegal() {
        return illegal(null, null);
    }

    /**
     * 初始化数据
     * @param <T> 类型
     * @return 构造器
     */
    public static <T> PageResult.PageResultBuilder<T> newBuilder() {
        return PageResult.builder();
    }

}
