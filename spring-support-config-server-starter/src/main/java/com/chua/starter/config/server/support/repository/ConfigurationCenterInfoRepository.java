package com.chua.starter.config.server.support.repository;

import com.chua.common.support.json.Json;
import com.chua.common.support.spi.ServiceProvider;
import com.chua.common.support.utils.MapUtils;
import com.chua.starter.common.support.configuration.SpringBeanUtils;
import com.chua.starter.config.constant.ConfigConstant;
import com.chua.starter.config.server.support.base.ConfigurationRepository;
import com.chua.starter.config.server.support.protocol.ProtocolServer;
import com.chua.starter.config.server.support.query.DetailUpdate;
import com.google.common.base.Splitter;
import com.google.common.base.Strings;
import org.springframework.context.expression.BeanFactoryAccessor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;
import org.springframework.expression.EvaluationException;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.common.TemplateParserContext;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.*;

/**
 * TConfigurationCenterInfo
 *
 * @author CH
 * @since 2022/8/1 13:06
 */
@SuppressWarnings("ALL")
@Deprecated
@Repository("config")
public interface ConfigurationCenterInfoRepository extends ConfigurationRepository<ConfigurationCenterInfo> {

    @Override
    @Transactional
    default void analysis(String applicationName, Map<String, Object> data) {
        Boolean refresh = MapUtils.getBoolean(data, ConfigConstant.REFRESH, false);
        ConfigurationCenterInfo tConfigurationCenterInfo = new ConfigurationCenterInfo();
        tConfigurationCenterInfo.setConfigApplicationName(applicationName);

        boolean exists = exists(Example.of(tConfigurationCenterInfo));

        List<ConfigurationCenterInfo> configurationCenterInfos = new LinkedList<>();
        if (!exists) {
            intoDatabase(data, applicationName, configurationCenterInfos);
        }

        ConfigurationRepository repository = ServiceProvider.of(ConfigurationRepository.class).getExtension(ConfigConstant.SUBSCRIBE);
        if(null != repository) {
            data.put(ConfigConstant.APPLICATION_DATA_TYPE, ConfigConstant.BEAN);
            repository.analysis(applicationName, data);
        }
    }


    /**
     * 保存到數據庫
     *
     * @param data                     數據
     * @param applicationName          应用名称
     * @param configurationCenterInfos  数据
     */
    default void intoDatabase(Map<String, Object> data, String applicationName, List<ConfigurationCenterInfo> configurationCenterInfos) {
        String profile = MapUtils.getString(data, ConfigConstant.PROFILE, "dev");
        Map transfer = (Map) MapUtils.getObject(data, "transfer");
        data.remove("transfer");
        for (Map.Entry<String, Object> entry : data.entrySet()) {
            String key = entry.getKey();
            if (ConfigConstant.KEY.equalsIgnoreCase(key)) {
                continue;
            }

            Object value = entry.getValue();
            if (value instanceof Map) {
                render(transfer, (Map) value, null, profile, configurationCenterInfos, applicationName);
                continue;
            }

            ConfigurationCenterInfo item = new ConfigurationCenterInfo();
            item.setConfigApplicationName(applicationName);
            item.setConfigName(key);
            item.setConfigDesc(MapUtils.getString(transfer, key));
            item.setConfigProfile(profile);
            item.setConfigMappingName(key);
            item.setConfigValue(null == value ? "" : value.toString());
            item.setDisable(0);

            configurationCenterInfos.add(item);
        }

        saveAll(configurationCenterInfos);
    }

    /**
     * 渲染对象
     *
     * @param tranfer                      翻译
     * @param map                          数据
     * @param mapping                      映射
     * @param profile
     * @param tConfigurationCenterInfoList 结果
     * @param binderName                   标识
     */
    @SuppressWarnings("ALL")
    default void render(Map tranfer, Map map, String mapping, String profile, List<ConfigurationCenterInfo> tConfigurationCenterInfoList, String binderName) {
        map.forEach((key, value) -> {
            if (value instanceof Map) {
                render(tranfer, (Map) value, key.toString(), profile, tConfigurationCenterInfoList, binderName);
            }
            ConfigurationCenterInfo item = new ConfigurationCenterInfo();
            item.setConfigApplicationName(binderName);
            item.setConfigName(key.toString());
            item.setConfigDesc(MapUtils.getString(tranfer, key));
            item.setConfigMappingName(Optional.ofNullable(mapping).ofNullable(key.toString()).toString());
            item.setConfigValue(null == value ? "" : value.toString());
            item.setDisable(0);
            item.setConfigProfile(profile);


            tConfigurationCenterInfoList.add(item);
        });
    }



    @Override
    default String getSubscribe(String subscribe, String profile) {
        Specification<ConfigurationCenterInfo> specification = new Specification<ConfigurationCenterInfo>() {
            @Override
            public Predicate toPredicate(Root<ConfigurationCenterInfo> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicateList = new ArrayList<>();
                CriteriaBuilder.In<String> configApplicationName = criteriaBuilder.in(
                        root.get("configApplicationName").as(String.class));
                for (String value : Splitter.on(',').omitEmptyStrings().trimResults().splitToList(subscribe)) {
                    configApplicationName.value(value);
                }

                predicateList.add(configApplicationName);
                predicateList.add(criteriaBuilder.equal(root.get("configProfile"), profile));
                predicateList.add(criteriaBuilder.equal(root.get("disable"), 0));
                return query.where(predicateList.toArray(new Predicate[0])).getRestriction();
            }
        };
        List<ConfigurationCenterInfo> list = findAll(specification);
        Map<String, List<ConfigurationCenterInfo>> valueMapping = new HashMap<>();
        for (ConfigurationCenterInfo info : list) {
            valueMapping.computeIfAbsent(info.getConfigApplicationName(), it -> new ArrayList<>()).add(info);
        }
        Map<String, Map<String, Object>> rs = new HashMap<>();

        for (Map.Entry<String, List<ConfigurationCenterInfo>> entry : valueMapping.entrySet()) {
            String key = entry.getKey();
            List<ConfigurationCenterInfo> entryValue = entry.getValue();
            rs.put(key + ".data", render(key, entryValue));
        }

        return Json.toJson(rs);
    }

    /**
     * 渲染数据
     *
     * @param key        标识
     * @param entryValue 权限
     * @return 数据
     */
    default Map<String, Object> render(String key, List<ConfigurationCenterInfo> entryValue) {
        Map<String, Object> rs1 = new HashMap<>(1);
        Map<String, Object> rs = new HashMap<>(entryValue.size());

        rs1.put(key, rs);

        for (ConfigurationCenterInfo tConfigurationCenterInfo : entryValue) {
            String configCondition = tConfigurationCenterInfo.getConfigCondition();
            if (!Strings.isNullOrEmpty(configCondition) && isMatcher(configCondition)) {
                continue;
            }
            rs.put(tConfigurationCenterInfo.getConfigName(), tConfigurationCenterInfo.getConfigValue());
        }
        return rs1;
    }

    /**
     * 匹配信息
     *
     * @param configCondition 条件
     * @return 结果
     */
    default boolean isMatcher(String configCondition) {
        ExpressionParser parser = new SpelExpressionParser();
        StandardEvaluationContext standardEvaluationContext = new StandardEvaluationContext(SpringBeanUtils.getApplicationContext());
        standardEvaluationContext.addPropertyAccessor(new BeanFactoryAccessor());
        Expression expression = parser.parseExpression(configCondition, new TemplateParserContext());
        try {
            return expression.getValue(standardEvaluationContext, Boolean.class);
        } catch (EvaluationException e) {
            return false;
        }
    }
    @Override
    @Transactional
    default void unregister(String applicationName) {
        ConfigurationCenterInfo configurationCenterInfo = new ConfigurationCenterInfo();
        configurationCenterInfo.setConfigApplicationName(applicationName);
        delete(configurationCenterInfo);
    }

    @Override
    default Page<?> findAll(String profile, Pageable pageable) {
        ConfigurationCenterInfo configurationCenterInfo = new ConfigurationCenterInfo();
        configurationCenterInfo.setConfigProfile(profile);
        return findAll(Example.of(configurationCenterInfo), pageable);
    }


    /**
     * 环境
     *
     * @return 环境
     */
    @Query(value = "SELECT config_profile FROM CONFIGURATION_CENTER_INFO GROUP BY config_profile ", nativeQuery = true)
    Set<String> profile();

    /**
     * 环境
     *
     * @return 环境
     */
    @Query(value = "SELECT config_application_name FROM CONFIGURATION_CENTER_INFO GROUP BY config_application_name ", nativeQuery = true)
    Set<String> applications();


    @Override
    default void notifyConfig(ProtocolServer protocolServer,  ConfigurationSubscribeInfo subscribeInfo, Object configValue) {

    }

    @Override
    default Object getDetail(String configId) {
        return getById(Integer.valueOf(configId));
    }

    @Override
    default Object detailUpdate(DetailUpdate detailUpdate) {
        return null;
    }
}
