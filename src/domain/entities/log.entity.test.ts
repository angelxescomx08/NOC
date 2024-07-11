import { LogEntity, type LogEntityOptions } from "./log.entity";

describe("Log Entity", () => {
  it("should create a log entity", () => {

    const dataObject: LogEntityOptions = {
      level: "low",
      message: "test",
      origin: "log.entity.test.ts",
    }

    const log = new LogEntity(dataObject)

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.level).toBe(dataObject.level);
    expect(log.message).toBe(dataObject.message);
    expect(log.origin).toBe(dataObject.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a log entity from JSON", () => {
    const dataObject: LogEntityOptions = {
      level: "low",
      message: "test",
      origin: "log.entity.test.ts",
    }

    const log = new LogEntity(dataObject)
    const logJSON = JSON.stringify(log);

    const newLog = LogEntity.fromJSON(logJSON);

    expect(newLog).toBeInstanceOf(LogEntity);
    expect(newLog.level).toBe(dataObject.level);
    expect(newLog.message).toBe(dataObject.message);
    expect(newLog.origin).toBe(dataObject.origin);
    expect(newLog.createdAt).toBeInstanceOf(Date);
  });


  test("should create a log entity from Object", () => {
    const dataObject: LogEntityOptions = {
      level: "low",
      message: "test",
      origin: "log.entity.test.ts",
    }

    const newLog = LogEntity.fromObject(dataObject);

    expect(newLog).toBeInstanceOf(LogEntity);
    expect(newLog.level).toBe(dataObject.level);
    expect(newLog.message).toBe(dataObject.message);
    expect(newLog.origin).toBe(dataObject.origin);
    expect(newLog.createdAt).toBeInstanceOf(Date);
  });
});  