package com.chua.starter.rpc.support.annotation;

import com.alibaba.spring.util.AnnotationUtils;
import com.chua.rpc.support.annotation.RpcExport;
import com.chua.starter.common.support.configuration.SpringBeanUtils;
import com.chua.starter.rpc.support.properties.RpcProperties;
import org.apache.dubbo.common.logger.Logger;
import org.apache.dubbo.common.logger.LoggerFactory;
import org.apache.dubbo.common.utils.StringUtils;
import org.apache.dubbo.config.Constants;
import org.apache.dubbo.config.MethodConfig;
import org.apache.dubbo.config.annotation.Method;
import org.apache.dubbo.config.annotation.Service;
import org.apache.dubbo.config.spring.ServiceBean;
import org.apache.dubbo.config.spring.beans.factory.annotation.AnnotationPropertyValuesAdapter;
import org.apache.dubbo.config.spring.beans.factory.annotation.ServiceBeanNameBuilder;
import org.apache.dubbo.config.spring.beans.factory.annotation.ServicePackagesHolder;
import org.apache.dubbo.config.spring.util.DubboAnnotationUtils;
import org.apache.dubbo.config.spring.util.SpringCompatUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.MutablePropertyValues;
import org.springframework.beans.factory.BeanClassLoaderAware;
import org.springframework.beans.factory.BeanDefinitionStoreException;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.AnnotatedBeanDefinition;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.BeanDefinitionHolder;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.SingletonBeanRegistry;
import org.springframework.beans.factory.support.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.ResourceLoaderAware;
import org.springframework.context.annotation.AnnotationBeanNameGenerator;
import org.springframework.context.annotation.AnnotationConfigUtils;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.context.annotation.ConfigurationClassPostProcessor;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.type.MethodMetadata;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.core.type.filter.TypeFilter;
import org.springframework.util.CollectionUtils;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.*;

import static com.alibaba.spring.util.ObjectUtils.of;
import static java.util.Arrays.asList;
import static org.apache.dubbo.common.utils.AnnotationUtils.filterDefaultValues;
import static org.apache.dubbo.common.utils.AnnotationUtils.findAnnotation;
import static org.apache.dubbo.config.spring.beans.factory.annotation.ServiceBeanNameBuilder.create;
import static org.apache.dubbo.config.spring.util.DubboAnnotationUtils.resolveInterfaceName;
import static org.springframework.beans.factory.support.BeanDefinitionBuilder.rootBeanDefinition;
import static org.springframework.context.annotation.AnnotationConfigUtils.CONFIGURATION_BEAN_NAME_GENERATOR;
import static org.springframework.util.ClassUtils.resolveClassName;

/**
 * remote
 *
 * @author CH
 */
@ConditionalOnProperty(prefix = "plugin.rpc", name = "impl", havingValue = "dubbo", matchIfMissing = false)
public class RpcDubboServiceAnnotationPostProcessor implements BeanDefinitionRegistryPostProcessor, EnvironmentAware,
        ResourceLoaderAware, BeanClassLoaderAware, ApplicationContextAware, InitializingBean {

    private final static List<Class<? extends Annotation>> SERVICE_ANNOTATION_TYPES = asList(
            RpcExport.class
    );

    private final Logger logger = LoggerFactory.getLogger(getClass());

    protected Set<String> packagesToScan;

    private Set<String> resolvedPackagesToScan;

    private Environment environment;

    private ResourceLoader resourceLoader;

    private ClassLoader classLoader;

    private BeanDefinitionRegistry registry;

    private ServicePackagesHolder servicePackagesHolder;

    private volatile boolean scanned = false;

    private ApplicationContext applicationContext;


    @Override
    public void afterPropertiesSet() throws Exception {
        RpcProperties remoteProperties = SpringBeanUtils.bindOrCreate(RpcProperties.PRE, RpcProperties.class);
        if (null == remoteProperties || CollectionUtils.isEmpty(remoteProperties.getScan())) {
            packagesToScan = Collections.singleton(applicationContext.getBeansWithAnnotation(SpringBootApplication.class).values().iterator().next().getClass().getPackage().getName());
        } else {
            packagesToScan = remoteProperties.getScan();
        }
        this.resolvedPackagesToScan = resolvePackagesToScan(packagesToScan);
    }

    @Override
    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) throws BeansException {
        this.registry = registry;
        scanServiceBeans(resolvedPackagesToScan, registry);
    }

    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
        if (this.registry == null) {
            // In spring 3.x, may be not call postProcessBeanDefinitionRegistry()
            this.registry = (BeanDefinitionRegistry) beanFactory;
        }

        // scan bean definitions
        String[] beanNames = beanFactory.getBeanDefinitionNames();
        for (String beanName : beanNames) {
            BeanDefinition beanDefinition = beanFactory.getBeanDefinition(beanName);
            Map<String, Object> annotationAttributes = getServiceAnnotationAttributes(beanDefinition);
            if (annotationAttributes != null) {
                // process @DubboService at java-config @bean method
                processAnnotatedBeanDefinition(beanName, (AnnotatedBeanDefinition) beanDefinition, annotationAttributes);
            }
        }

        if (!scanned) {
            // In spring 3.x, may be not call postProcessBeanDefinitionRegistry(), so scan service class here
            scanServiceBeans(resolvedPackagesToScan, registry);
        }
    }

    /**
     * Scan and registers service beans whose classes was annotated {@link Service}
     *
     * @param packagesToScan The base packages to scan
     * @param registry       {@link BeanDefinitionRegistry}
     */
    private void scanServiceBeans(Set<String> packagesToScan, BeanDefinitionRegistry registry) {

        scanned = true;
        if (CollectionUtils.isEmpty(packagesToScan)) {
            if (logger.isWarnEnabled()) {
                logger.warn("packagesToScan is empty , ServiceBean registry will be ignored!");
            }
            return;
        }

        RpcClassPathBeanDefinitionScanner scanner =
                new RpcClassPathBeanDefinitionScanner(registry, environment, resourceLoader);

        BeanNameGenerator beanNameGenerator = resolveBeanNameGenerator(registry);
        scanner.setBeanNameGenerator(beanNameGenerator);
        for (Class<? extends Annotation> annotationType : SERVICE_ANNOTATION_TYPES) {
            scanner.addIncludeFilter(new AnnotationTypeFilter(annotationType));
        }

        ScanExcludeFilter scanExcludeFilter = new ScanExcludeFilter();
        scanner.addExcludeFilter(scanExcludeFilter);

        for (String packageToScan : packagesToScan) {

            // Registers @Service Bean first
            scanner.scan(packageToScan);

            // Finds all BeanDefinitionHolders of @Service whether @ComponentScan scans or not.
            Set<BeanDefinitionHolder> beanDefinitionHolders =
                    findServiceBeanDefinitionHolders(scanner, packageToScan, registry, beanNameGenerator);

            if (!CollectionUtils.isEmpty(beanDefinitionHolders)) {
                if (logger.isInfoEnabled()) {
                    List<String> serviceClasses = new ArrayList<>(beanDefinitionHolders.size());
                    for (BeanDefinitionHolder beanDefinitionHolder : beanDefinitionHolders) {
                        serviceClasses.add(beanDefinitionHolder.getBeanDefinition().getBeanClassName());
                    }
                    logger.info("Found " + beanDefinitionHolders.size() + " classes annotated by Dubbo @Service under package [" + packageToScan + "]: " + serviceClasses);
                }

                for (BeanDefinitionHolder beanDefinitionHolder : beanDefinitionHolders) {
                    processScannedBeanDefinition(beanDefinitionHolder);
                    servicePackagesHolder.addScannedClass(beanDefinitionHolder.getBeanDefinition().getBeanClassName());
                }
            } else {
                if (logger.isWarnEnabled()) {
                    logger.warn("No class annotated by Dubbo @Service was found under package ["
                            + packageToScan + "], ignore re-scanned classes: " + scanExcludeFilter.getExcludedCount());
                }
            }

            servicePackagesHolder.addScannedPackage(packageToScan);
        }
    }

    /**
     * It'd be better to use BeanNameGenerator instance that should reference
     * thus it maybe a potential problem on bean name generation.
     *
     * @param registry {@link BeanDefinitionRegistry}
     * @return {@link BeanNameGenerator} instance
     * @see SingletonBeanRegistry
     * @see AnnotationConfigUtils#CONFIGURATION_BEAN_NAME_GENERATOR
     * @see ConfigurationClassPostProcessor#processConfigBeanDefinitions
     * @since 2.5.8
     */
    private BeanNameGenerator resolveBeanNameGenerator(BeanDefinitionRegistry registry) {

        BeanNameGenerator beanNameGenerator = null;

        if (registry instanceof SingletonBeanRegistry) {
            SingletonBeanRegistry singletonBeanRegistry = SingletonBeanRegistry.class.cast(registry);
            beanNameGenerator = (BeanNameGenerator) singletonBeanRegistry.getSingleton(CONFIGURATION_BEAN_NAME_GENERATOR);
        }

        if (beanNameGenerator == null) {

            if (logger.isInfoEnabled()) {

                logger.info("BeanNameGenerator bean can't be found in BeanFactory with name ["
                        + CONFIGURATION_BEAN_NAME_GENERATOR + "]");
                logger.info("BeanNameGenerator will be a instance of " +
                        AnnotationBeanNameGenerator.class.getName() +
                        " , it maybe a potential problem on bean name generation.");
            }

            beanNameGenerator = new AnnotationBeanNameGenerator();

        }

        return beanNameGenerator;

    }

    /**
     * Finds a {@link Set} of {@link BeanDefinitionHolder BeanDefinitionHolders} whose bean type annotated
     * {@link Service} Annotation.
     *
     * @param scanner       {@link ClassPathBeanDefinitionScanner}
     * @param packageToScan pachage to scan
     * @param registry      {@link BeanDefinitionRegistry}
     * @return non-null
     * @since 2.5.8
     */
    private Set<BeanDefinitionHolder> findServiceBeanDefinitionHolders(
            ClassPathBeanDefinitionScanner scanner, String packageToScan, BeanDefinitionRegistry registry,
            BeanNameGenerator beanNameGenerator) {

        Set<BeanDefinition> beanDefinitions = scanner.findCandidateComponents(packageToScan);

        Set<BeanDefinitionHolder> beanDefinitionHolders = new LinkedHashSet<>(beanDefinitions.size());

        for (BeanDefinition beanDefinition : beanDefinitions) {

            String beanName = beanNameGenerator.generateBeanName(beanDefinition, registry);
            BeanDefinitionHolder beanDefinitionHolder = new BeanDefinitionHolder(beanDefinition, beanName);
            beanDefinitionHolders.add(beanDefinitionHolder);

        }

        return beanDefinitionHolders;

    }

    /**
     * Registers {@link ServiceBean} from new annotated {@link Service} {@link BeanDefinition}
     *
     * @param beanDefinitionHolder
     * @see ServiceBean
     * @see BeanDefinition
     */
    private void processScannedBeanDefinition(BeanDefinitionHolder beanDefinitionHolder) {

        Class<?> beanClass = resolveClass(beanDefinitionHolder);

        Annotation service = findServiceAnnotation(beanClass);

        // The attributes of @Service annotation
        Map<String, Object> serviceAnnotationAttributes = AnnotationUtils.getAttributes(service, true);

        String serviceInterface = resolveInterfaceName(serviceAnnotationAttributes, beanClass);

        String annotatedServiceBeanName = beanDefinitionHolder.getBeanName();

        // ServiceBean Bean name
        String beanName = generateServiceBeanName(serviceAnnotationAttributes, serviceInterface);

        AbstractBeanDefinition serviceBeanDefinition =
                buildServiceBeanDefinition(serviceAnnotationAttributes, serviceInterface, annotatedServiceBeanName);

        registerServiceBeanDefinition(beanName, serviceBeanDefinition, serviceInterface);

    }

    /**
     * Find the {@link Annotation annotation} of @Service
     *
     * @param beanClass the {@link Class class} of Bean
     * @return <code>null</code> if not found
     * @since 2.7.3
     */
    private Annotation findServiceAnnotation(Class<?> beanClass) {
        return SERVICE_ANNOTATION_TYPES
                .stream()
                .map(annotationType -> findAnnotation(beanClass, annotationType))
                .filter(Objects::nonNull)
                .findFirst()
                .orElse(null);
    }

    /**
     * Generates the bean name of {@link ServiceBean}
     *
     * @param serviceAnnotationAttributes
     * @param serviceInterface            the class of interface annotated {@link Service}
     * @return ServiceBean@interfaceClassName#annotatedServiceBeanName
     * @since 2.7.3
     */
    private String generateServiceBeanName(Map<String, Object> serviceAnnotationAttributes, String serviceInterface) {
        ServiceBeanNameBuilder builder = create(serviceInterface, environment)
                .group((String) serviceAnnotationAttributes.get("group"))
                .version((String) serviceAnnotationAttributes.get("version"));
        return builder.build();
    }

    private Class<?> resolveClass(BeanDefinitionHolder beanDefinitionHolder) {

        BeanDefinition beanDefinition = beanDefinitionHolder.getBeanDefinition();

        return resolveClass(beanDefinition);

    }

    private Class<?> resolveClass(BeanDefinition beanDefinition) {

        String beanClassName = beanDefinition.getBeanClassName();

        return resolveClassName(beanClassName, classLoader);

    }

    private Set<String> resolvePackagesToScan(Set<String> packagesToScan) {
        Set<String> resolvedPackagesToScan = new LinkedHashSet<String>(packagesToScan.size());
        for (String packageToScan : packagesToScan) {
            if (StringUtils.hasText(packageToScan)) {
                String resolvedPackageToScan = environment.resolvePlaceholders(packageToScan.trim());
                resolvedPackagesToScan.add(resolvedPackageToScan);
            }
        }
        return resolvedPackagesToScan;
    }

    /**
     * Build the {@link AbstractBeanDefinition Bean Definition}
     *
     * @param serviceAnnotationAttributes
     * @param serviceInterface
     * @param refServiceBeanName
     * @return
     * @since 2.7.3
     */
    private AbstractBeanDefinition buildServiceBeanDefinition(Map<String, Object> serviceAnnotationAttributes,
                                                              String serviceInterface,
                                                              String refServiceBeanName) {

        BeanDefinitionBuilder builder = rootBeanDefinition(ServiceBean.class);

        AbstractBeanDefinition beanDefinition = builder.getBeanDefinition();

        MutablePropertyValues propertyValues = beanDefinition.getPropertyValues();

        String[] ignoreAttributeNames = of("provider", "monitor", "application", "module", "registry", "protocol",
                "methods", "interfaceName", "parameters");

        propertyValues.addPropertyValues(new AnnotationPropertyValuesAdapter(serviceAnnotationAttributes, environment, ignoreAttributeNames));

        //set config id, for ConfigManager cache key
        //builder.addPropertyValue("id", beanName);
        // References "ref" property to annotated-@Service Bean
        addPropertyReference(builder, "ref", refServiceBeanName);
        // Set interface
        builder.addPropertyValue("interface", serviceInterface);
        // Convert parameters into map
        builder.addPropertyValue("parameters", DubboAnnotationUtils.convertParameters((String[]) serviceAnnotationAttributes.get("parameters")));
        // Add methods parameters
        List<MethodConfig> methodConfigs = convertMethodConfigs(serviceAnnotationAttributes.get("methods"));
        if (!methodConfigs.isEmpty()) {
            builder.addPropertyValue("methods", methodConfigs);
        }

        // convert provider to providerIds
        String providerConfigId = (String) serviceAnnotationAttributes.get("provider");
        if (StringUtils.hasText(providerConfigId)) {
            addPropertyValue(builder, "providerIds", providerConfigId);
        }

        // Convert registry[] to registryIds
        String[] registryConfigIds = (String[]) serviceAnnotationAttributes.get("registry");
        if (registryConfigIds != null && registryConfigIds.length > 0) {
            resolveStringArray(registryConfigIds);
            builder.addPropertyValue("registryIds", StringUtils.join(registryConfigIds, ','));
        }

        // Convert protocol[] to protocolIds
        String[] protocolConfigIds = (String[]) serviceAnnotationAttributes.get("protocol");
        if (protocolConfigIds != null && protocolConfigIds.length > 0) {
            resolveStringArray(protocolConfigIds);
            builder.addPropertyValue("protocolIds", StringUtils.join(protocolConfigIds, ','));
        }

        // TODO Could we ignore these attributes: applicatin/monitor/module ? Use global config
        // monitor reference
        String monitorConfigId = (String) serviceAnnotationAttributes.get("monitor");
        if (StringUtils.hasText(monitorConfigId)) {
            addPropertyReference(builder, "monitor", monitorConfigId);
        }

        // module reference
        String moduleConfigId = (String) serviceAnnotationAttributes.get("module");
        if (StringUtils.hasText(moduleConfigId)) {
            addPropertyReference(builder, "module", moduleConfigId);
        }

        return builder.getBeanDefinition();

    }

    private String[] resolveStringArray(String[] strs) {
        if (strs == null) {
            return null;
        }
        for (int i = 0; i < strs.length; i++) {
            strs[i] = environment.resolvePlaceholders(strs[i]);
        }
        return strs;
    }

    private List convertMethodConfigs(Object methodsAnnotation) {
        if (methodsAnnotation == null) {
            return Collections.EMPTY_LIST;
        }
        return MethodConfig.constructMethodConfig((Method[]) methodsAnnotation);
    }

    private void addPropertyReference(BeanDefinitionBuilder builder, String propertyName, String beanName) {
        String resolvedBeanName = environment.resolvePlaceholders(beanName);
        builder.addPropertyReference(propertyName, resolvedBeanName);
    }

    private void addPropertyValue(BeanDefinitionBuilder builder, String propertyName, String value) {
        String resolvedBeanName = environment.resolvePlaceholders(value);
        builder.addPropertyValue(propertyName, resolvedBeanName);
    }

    /**
     * Get dubbo service annotation class at java-config @bean method
     *
     * @return return service annotation attributes map if found, or return null if not found.
     */
    private Map<String, Object> getServiceAnnotationAttributes(BeanDefinition beanDefinition) {
        if (beanDefinition instanceof AnnotatedBeanDefinition) {
            AnnotatedBeanDefinition annotatedBeanDefinition = (AnnotatedBeanDefinition) beanDefinition;
            MethodMetadata factoryMethodMetadata = SpringCompatUtils.getFactoryMethodMetadata(annotatedBeanDefinition);
            if (factoryMethodMetadata != null) {
                // try all dubbo service annotation types
                for (Class<? extends Annotation> annotationType : SERVICE_ANNOTATION_TYPES) {
                    if (factoryMethodMetadata.isAnnotated(annotationType.getName())) {
                        // Since Spring 5.2
                        // return factoryMethodMetadata.getAnnotations().get(annotationType).filterDefaultValues().asMap();
                        // Compatible with Spring 4.x
                        Map<String, Object> annotationAttributes = factoryMethodMetadata.getAnnotationAttributes(annotationType.getName());
                        return filterDefaultValues(annotationType, annotationAttributes);
                    }
                }
            }
        }
        return null;
    }

    /**
     * process @DubboService at java-config @bean method
     * <pre class="code">
     * &#064;Configuration
     * public class ProviderConfig {
     *
     *      &#064;Bean
     *      &#064;DubboService(group="demo", version="1.2.3")
     *      public DemoService demoService() {
     *          return new DemoServiceImpl();
     *      }
     *
     * }
     * </pre>
     *
     * @param refServiceBeanName
     * @param refServiceBeanDefinition
     * @param attributes
     */
    private void processAnnotatedBeanDefinition(String refServiceBeanName, AnnotatedBeanDefinition refServiceBeanDefinition, Map<String, Object> attributes) {

        Map<String, Object> serviceAnnotationAttributes = new LinkedHashMap<>(attributes);

        // get bean class from return type
        String returnTypeName = SpringCompatUtils.getFactoryMethodReturnType(refServiceBeanDefinition);
        Class<?> beanClass = resolveClassName(returnTypeName, classLoader);

        String serviceInterface = resolveInterfaceName(serviceAnnotationAttributes, beanClass);

        // ServiceBean Bean name
        String serviceBeanName = generateServiceBeanName(serviceAnnotationAttributes, serviceInterface);

        AbstractBeanDefinition serviceBeanDefinition = buildServiceBeanDefinition(serviceAnnotationAttributes, serviceInterface, refServiceBeanName);

        // set id
        serviceBeanDefinition.getPropertyValues().add(Constants.ID, serviceBeanName);

        registerServiceBeanDefinition(serviceBeanName, serviceBeanDefinition, serviceInterface);
    }

    private void registerServiceBeanDefinition(String serviceBeanName, AbstractBeanDefinition serviceBeanDefinition, String serviceInterface) {
        // check service bean
        if (registry.containsBeanDefinition(serviceBeanName)) {
            BeanDefinition existingDefinition = registry.getBeanDefinition(serviceBeanName);
            if (existingDefinition.equals(serviceBeanDefinition)) {
                // exist equipment bean definition
                return;
            }

            String msg = "Found duplicated BeanDefinition of service interface [" + serviceInterface + "] with bean name [" + serviceBeanName +
                    "], existing definition [ " + existingDefinition + "], new definition [" + serviceBeanDefinition + "]";
            logger.error(msg);
            throw new BeanDefinitionStoreException(serviceBeanDefinition.getResourceDescription(), serviceBeanName, msg);
        }

        registry.registerBeanDefinition(serviceBeanName, serviceBeanDefinition);
        if (logger.isInfoEnabled()) {
            logger.info("Register ServiceBean[" + serviceBeanName + "]: " + serviceBeanDefinition);
        }
    }

    @Override
    public void setEnvironment(Environment environment) {
        this.environment = environment;
    }

    @Override
    public void setResourceLoader(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @Override
    public void setBeanClassLoader(ClassLoader classLoader) {
        this.classLoader = classLoader;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.servicePackagesHolder = applicationContext.getBean(ServicePackagesHolder.BEAN_NAME, ServicePackagesHolder.class);
        this.applicationContext = applicationContext;
    }

    private class ScanExcludeFilter implements TypeFilter {

        private int excludedCount;

        @Override
        public boolean match(MetadataReader metadataReader, MetadataReaderFactory metadataReaderFactory) throws IOException {
            String className = metadataReader.getClassMetadata().getClassName();
            boolean excluded = servicePackagesHolder.isClassScanned(className);
            if (excluded) {
                excludedCount++;
            }
            return excluded;
        }

        public int getExcludedCount() {
            return excludedCount;
        }
    }


}
