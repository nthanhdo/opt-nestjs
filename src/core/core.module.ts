// File: src/core/core.module.ts
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';

import { BenchmarkInterceptor } from './interceptors/benchmark.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';

import { AuthGuard } from './guards/auth.guard';

@Module({
  providers: [
    /**
     * GLOBAL INTERCEPTORS
     */
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: BenchmarkInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },

    /**
     * GLOBAL GUARDS
     */
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class CoreModule {}
