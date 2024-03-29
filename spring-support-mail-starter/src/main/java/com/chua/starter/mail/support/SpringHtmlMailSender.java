package com.chua.starter.mail.support;

import com.chua.common.support.annotations.Spi;
import com.chua.common.support.lang.mail.AbstractMailSender;
import com.chua.common.support.lang.mail.Mail;
import com.chua.common.support.lang.mail.MailConfiguration;
import com.chua.common.support.lang.mail.MailSender;
import com.chua.common.support.log.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * spring
 * @author CH
 */
@Spi(value = "html", order = 1)
public class SpringHtmlMailSender extends SpringTextMailSender {

    private static final Log log = Log.getLogger(MailSender.class);
    @Resource
    private JavaMailSender javaMailSender;
    public SpringHtmlMailSender(MailConfiguration configuration) {
        super(configuration);
    }

    @Override
    public void send(String from, Mail mail) throws Exception {
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            //true表示需要创建一个multipart message
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            addAttach(helper, from, mail);
            helper.setFrom(from);
            helper.setTo(mail.getTo());
            helper.setSubject(mail.getTitle());
            helper.setText(mail.getContent(), true);
            javaMailSender.send(message);
            log.info("html邮件已经发送{}。", mail.getTo());
        } catch (MessagingException e) {
            log.error("发送html邮件时发生异常！", e);
        }
    }
}
