import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { registerAuthMocks } from './mock/auth.mock.resolver';

@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule implements OnModuleInit {
  onModuleInit() {
    registerAuthMocks();
  }
}
