import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

/**
 * Modules
 */
import {CoreModule} from './core/core.module';
import {MockModule} from "@mock/mock.module";

@Module({
  imports: [CoreModule, MockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
