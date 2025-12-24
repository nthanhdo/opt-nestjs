import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

/**
 * =========================
 * CONFIG LOADERS
 * =========================
 */
import { appConfig } from './config/app.config';
import { featureConfig } from './config/feature.config';
import { databaseConfig } from './config/database.config';
import { cacheConfig } from './config/cache.config';
import { loggerConfig } from './config/logger.config';

/**
 * =========================
 * CORE MODULES
 * =========================
 */
import { LoggerModule } from './core/logger/logger.module';
import { ErrorModule } from './core/error/error.module';
import { DatabaseModule } from './core/database/database.module';
import { CacheModule } from './core/cache/cache.module';
import { CoreModule } from './core/core.module';
import { MockModule } from './mock/mock.module';


/**
 * =========================
 * FEATURE MODULES
 * =========================
 */
import {AuthModule} from "./modules/auth/auth.module";

@Module({
  imports: [
    /**
     * ENV → CONFIG OBJECT
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/.env.${process.env.NODE_ENV || 'development'}`,
      load: [
        appConfig,
        featureConfig,
        databaseConfig,
        cacheConfig,
        loggerConfig,
      ],
    }),

    /**
     * CORE SYSTEM
     */
    CoreModule,     // interceptors, guards, middlewares
    LoggerModule,
    ErrorModule,
    DatabaseModule,
    CacheModule,

    /**
     * MOCK CORE (FE-FIRST)
     */
    MockModule,

    /**
     * Feature Modules
     */
    AuthModule,
  ],
})
export class AppModule {}
