import { Global, Module } from '@nestjs/common';
import { CacheFactory } from './cache.factory';

@Global()
@Module({
  providers: [CacheFactory],
  exports: [CacheFactory],
})
export class CacheModule {}
