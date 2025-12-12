import { Module } from '@nestjs/common';
import { AuthMockModule } from '@mock/auth/auth.mock.module';

@Module({
  imports: [AuthMockModule],
})
export class MockModule {}
