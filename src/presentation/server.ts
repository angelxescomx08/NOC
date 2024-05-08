import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    CronService.createJob("*/5 * * * * *", () => {
      console.log("Cada 5 segundos");
    });

    CronService.createJob("*/3 * * * * *", () => {
      console.log("Cada 3 segundos");
    });

    CronService.createJob("*/2 * * * * *", () => {
      console.log("Cada 2 segundos");
    });
  }
}
