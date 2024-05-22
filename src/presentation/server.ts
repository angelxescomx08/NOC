import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
  public static start() {
    /* new SendEmailLogs(emailService, fileSystemLogRepository).execute(
      "jose.angel.hdz.rda@gmail.com"
    ); */
    /* const emailService = new EmailService(fileSystemLogRepository);
    emailService.sendEmailWithFileSystemLogs("jose.angel.hdz.rda@gmail.com"); */
    //CronService.createJob("*/5 * * * * *", () => {
    /*  new CheckService(
        fileSystemLogRepository,
        () => {
          console.log("Service is ok");
        },
        (error: string) => {
          console.log(error);
        }
      ).execute("https://google.com");
    });*/
  }
}
