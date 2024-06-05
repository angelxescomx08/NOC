import { LogModel } from "../../data/mongoDB";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, typeLogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoLogDatasource implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await LogModel.create(log);
    await newLog.save();
    console.log(`Log saved: ${newLog._id}`);
  }

  async getLogs(severityLevel: typeLogSeverityLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({
      level: severityLevel
    });
    return logs.map((log) => LogEntity.fromObject(log));
  }
}