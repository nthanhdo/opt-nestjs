import winston from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize, errors, json } = winston.format;

/**
 * =========================
 * CONSOLE FORMAT (Nest-like)
 * =========================
 */
const nestLikeFormat = printf(({ level, message, timestamp, context }) => {
  return `[${timestamp}]  [${level.padEnd(7)}] ${context ? `[${context}] ` : ''} ${message}`;
});

export function createLoggerTransport() {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
      errors({ stack: true }),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    ),
    transports: [
      /**
       * =========================
       * CONSOLE (DEV FRIENDLY)
       * =========================
       */
      new winston.transports.Console({
        format: combine(
          colorize({ all: true }),
          nestLikeFormat,
        ),
      }),

      /**
       * =========================
       * FILE (DAILY ROTATE)
       * =========================
       */
      new winston.transports.DailyRotateFile({
        dirname: 'logs',
        filename: 'app-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: combine(
          timestamp(),
          json(),
        ),
      }),
    ],
  });
}
