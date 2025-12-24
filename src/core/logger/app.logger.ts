import { Injectable, LoggerService } from '@nestjs/common';
import { createLoggerTransport } from './logger.transport';

/**
 * AppLogger = LoggerService Adapter
 * - NestJS compatible
 * - Internally dùng winston
 */
@Injectable()
export class AppLogger implements LoggerService {
  private readonly logger = createLoggerTransport();

  /**
   * ===== NestJS REQUIRED =====
   */
  log(message: any, ...optionalParams: any[]) {
    this.logger.info(message, { optionalParams });
  }

  error(message: any, ...optionalParams: any[]) {
    this.logger.error(message, { optionalParams });
  }

  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message, { optionalParams });
  }

  debug(message: any, ...optionalParams: any[]) {
    this.logger.debug(message, { optionalParams });
  }

  verbose(message: any, ...optionalParams: any[]) {
    this.logger.verbose(message, { optionalParams });
  }

  /**
   * ===== Semantic helpers (OPTIONAL) =====
   */
  info(message: string, meta?: unknown) {
    this.logger.info(message, meta);
  }
}
