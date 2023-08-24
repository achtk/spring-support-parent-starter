package com.cym.service;

import cn.hutool.core.util.StrUtil;
import com.cym.model.Www;
import com.cym.sqlhelper.utils.ConditionAndWrapper;
import com.cym.sqlhelper.utils.SqlHelper;
import org.noear.solon.annotation.Inject;
import org.noear.solon.aspect.annotation.Service;

@Service
public class WwwService {

    @Inject
    SqlHelper sqlHelper;

    public Boolean hasDir(String dir, String id) {
        ConditionAndWrapper conditionAndWrapper = new ConditionAndWrapper().eq("dir", dir);
        if (StrUtil.isNotEmpty(id)) {
            conditionAndWrapper.ne("id", id);
        }
        return sqlHelper.findCountByQuery(conditionAndWrapper, Www.class) > 0;

    }
}
