export const LogSeverityLevel = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type typeLogSeverityLevel = keyof typeof LogSeverityLevel;

export interface LogEntityOptions {
  level: typeLogSeverityLevel;
  message: string;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: typeLogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { level, message, origin, createdAt = new Date() } = options;
    this.level = level;
    this.message = message;
    this.createdAt = createdAt;
    this.origin = origin;
  }

  static fromJSON(json: string): LogEntity {
    const { level, message, createdAt, origin } = JSON.parse(json);
    const log = new LogEntity({
      level,
      message,
      origin,
      createdAt,
    });
    log.createdAt = new Date(createdAt);
    return log;
  }

  static fromObject(obj: Record<string,any>): LogEntity {
    const { level, message, createdAt, origin } = obj;
    return new LogEntity({
      level,
      message,
      origin,
      createdAt,
    });
  }
}
