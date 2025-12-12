import { Module, Global } from '@nestjs/common';
import { MockAuthController } from './auth/mock-auth.controller';
import { MockAuthService } from './auth/mock-auth.service';

@Global()
@Module({
  controllers: [MockAuthController],
  providers: [MockAuthService],
  exports: [MockAuthService],
})
export class MockModule {}
