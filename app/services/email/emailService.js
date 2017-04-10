/**
 * Created by i327364 on 25/02/2017.
 */

const nodemailer = require('nodemailer'),
    mjml2html = require('mjml').mjml2html,
    config = require('./../../../config/config'),
    _ = require('lodash');
const smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: config.emailAddr,
            pass: config.emailPass
        },
        tls: {
            rejectUnauthorized: false
        }
    },
    defaultContext = {
        eventName: config.eventname,
        websiteAddress: config.eventwebsite
    };


class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport(smtpConfig);
    }

    createTemplateSender(transporter, emailType) {
        return transporter.templateSender({
            subject: emailType.data.subject,
            text: emailType.data.body,
            html: mjml2html(emailType.data.mjml_body).html
        }, {from: config.emailAddr});
    }

    sendEmail(emailType, to, context) {
        const templateSender = this.createTemplateSender(this.transporter, emailType);
        templateSender({to: to}, _.merge(defaultContext, context))
            .then((info) => {
                console.log(`EMail send successfully to ${info.accepted[0]}`);
            })
            .catch((err) => {
                console.error(err);
            })
    }

}
const emailService = new EmailService();

module.exports = emailService;

