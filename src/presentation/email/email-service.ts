import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  constructor() {}

  async sendEmail(options: SendEmailOptions) {
    try {
      const { htmlBody, subject, to, attachments } = options;
      const sentInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments,
      });
      //console.log(sentInformation);
      const log = new LogEntity({
        level: LogSeverityLevel.low,
        message: "Email sent",
        origin: "email-service.ts",
      });
      //this.logRepository.saveLog(log);
      return true;
    } catch (error) {
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = "Logs del servidor";
    const htmlBody = `<h1>Hola</h1>
    <p>Correo enviado correctamente</p>
    `;
    const attachments: Attachment[] = [
      { filename: "logs-all.log", path: "./logs/logs-all.log" },
      { filename: "logs-high.log", path: "./logs/logs-high.log" },
      { filename: "logs-medium.log", path: "./logs/logs-medium.log" },
    ];

    const log = new LogEntity({
      level: LogSeverityLevel.low,
      message: "Email not sent",
      origin: "email-service.ts",
    });
    //this.logRepository.saveLog(log);
    return this.sendEmail({
      to,
      attachments,
      htmlBody,
      subject,
    });
  }
}
