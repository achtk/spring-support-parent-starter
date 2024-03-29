package com.chua.starter.common.support.expression;

import com.chua.common.support.annotations.Spi;
import com.chua.common.support.lang.expression.parser.ExpressionParser;
import com.chua.common.support.value.Value;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.common.TemplateParserContext;
import org.springframework.expression.spel.support.StandardEvaluationContext;

/**
 * @author CH
 */
@Spi("spring")
public class SpelExpressionParser implements ExpressionParser {

    final EvaluationContext evaluationContext = new StandardEvaluationContext();
    private final org.springframework.expression.ExpressionParser expressionParser = new org.springframework.expression.spel.standard.SpelExpressionParser();

    @Override
    public ExpressionParser setVariable(String name, Object value) {
        evaluationContext.setVariable(name, value);
        return this;
    }

    @Override
    public Value<?> parseExpression(String express) {
        return Value.of(expressionParser.parseExpression(express, new TemplateParserContext()).getValue(evaluationContext));
    }

    @Override
    public void addFunction(Class<?> type, Object bean) {

    }
}
