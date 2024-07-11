import { LogEntity, typeLogSeverityLevel } from "../entities/log.entity";
import { LogDatasource } from "./log.datasource";

describe("Log Datasource", () => {

  const newLog = new LogEntity({
    level: "low",
    message: "Test log",
    origin: "log.datasource.test.ts"
  })

  class MockLogDatasource implements LogDatasource {

    async saveLog(log: LogEntity): Promise<void> {
      return;
    }
    async getLogs(severityLevel: typeLogSeverityLevel): Promise<LogEntity[]> {
      return [newLog];
    }
  }

  it("should have all methods", () => {
    const mock = new MockLogDatasource()

    expect(mock).toBeInstanceOf(MockLogDatasource)

    expect(MockLogDatasource.prototype).toHaveProperty("saveLog")
    expect(MockLogDatasource.prototype).toHaveProperty("getLogs")

    expect(typeof MockLogDatasource.prototype.saveLog).toBe('function');
    expect(typeof MockLogDatasource.prototype.getLogs).toBe('function');
  });
})