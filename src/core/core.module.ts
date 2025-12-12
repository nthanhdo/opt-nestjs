import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalContext } from './context/global-context';
import globalConfig from './config/global.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [globalConfig],
      isGlobal: true, // ConfigModule global
    }),
  ],
  providers: [GlobalContext],
  exports: [GlobalContext],
})
export class CoreModule {}
