import { LogEntity, typeLogSeverityLevel } from "../entities/log.entity";

export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: typeLogSeverityLevel): Promise<LogEntity[]>;
}
