import { registerAs } from '@nestjs/config';
import appConfig from './app.config';
import securityConfig from './security.config';
import featuresConfig from './features.config';
import versionConfig from './version.config';

export default registerAs('global', () => ({
  app: appConfig(),
  security: securityConfig(),
  features: featuresConfig(),
  version: versionConfig(),
}));
