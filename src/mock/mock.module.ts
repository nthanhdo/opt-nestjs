import { Global, Module, OnModuleInit } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { MockInterceptor } from './mock.handler';
import { registerAllMocks } from './apis';

@Global()
@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MockInterceptor,
    },
  ],
})
export class MockModule implements OnModuleInit {
  onModuleInit() {
    registerAllMocks();
  }
}
