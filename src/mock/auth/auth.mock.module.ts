import { Module } from '@nestjs/common';
import { AuthMockController } from '@mock/auth/auth.mock.controller';

@Module({
  controllers: [AuthMockController],
})
export class AuthMockModule {}
