import { Global, Module } from '@nestjs/common';
import { DatabaseFactory } from './database.factory';

@Global()
@Module({
  providers: [DatabaseFactory],
  exports: [DatabaseFactory],
})
export class DatabaseModule {}
