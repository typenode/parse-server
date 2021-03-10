type LogLevel =
  | "silly"
  | "debug"
  | "verbose"
  | "info"
  | "warn"
  | "error";

/**
 * Logger Adapter.
 * Allows you to change the logger mechanism.
 * Default is WinstonLoggerAdapter
 */
export declare interface LoggerAdapter {
  constructor(options: object): LoggerAdapter;
  /**
   * log
   * @param {String} level
   * @param {String} message
   * @param {Object} metadata
   */
  log(level: LogLevel, message: string, metadata?: object): void;
}
