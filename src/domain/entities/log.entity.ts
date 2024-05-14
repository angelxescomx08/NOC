export const LogSeverityLevel = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type typeLogSeverityLevel = keyof typeof LogSeverityLevel;

export class LogEntity {
  public level: typeLogSeverityLevel;
  public message: string;
  public createdAt: Date;

  constructor(level: typeLogSeverityLevel, message: string) {
    this.level = level;
    this.message = message;
    this.createdAt = new Date();
  }

  static fromJSON(json: string): LogEntity {
    const { level, message, createdAt } = JSON.parse(json);
    const log = new LogEntity(level, message);
    log.createdAt = new Date(createdAt);
    return log;
  }
}
