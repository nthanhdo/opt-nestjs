import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

/**
 * =========================
 * LOAD ENV EXPLICITLY
 * =========================
 */
dotenv.config({
  path: resolve(
    process.cwd(),
    'env',
    `./env/.env.${process.env.NODE_ENV || 'development'}`,
  ),
});

import { AppModule } from './app.module';
import { setupSwagger } from './core/swagger/swagger.setup';
import { AppLogger } from './core/logger/app.logger';

async function bootstrap() {
  /**
   * =========================
   * CREATE APP
   * =========================
   */
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  /**
   * =========================
   * CORE SERVICES
   * =========================
   */
  const configService = app.get(ConfigService);
  const logger = app.get(AppLogger);

  app.useLogger(logger);

  /**
   * =========================
   * GLOBAL PREFIX
   * =========================
   */
  const prefix = configService.get<string>('app.prefix', 'api');
  const version = configService.get<string>('app.version', 'v1');

  app.setGlobalPrefix(`${prefix}/${version}`);

  /**
   * =========================
   * GLOBAL VALIDATION
   * =========================
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /**
   * =========================
   * SWAGGER
   * =========================
   */
  setupSwagger(app, {
    prefix,
    version,
    configService,
  });

  /**
   * =========================
   * START SERVER
   * =========================
   */
  console.log( configService.get<number>('app.port'))
  const port = configService.get<number>('app.port', 3000);

  await app.listen(port);

  logger.log(
    `🚀 Application running at http://localhost:${port}/${prefix}/${version}`,
  );
}

bootstrap().catch((err) => {
  // LAST LINE OF DEFENSE
  console.error('❌ Bootstrap failed', err);
  process.exit(1);
});
