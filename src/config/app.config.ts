import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  name: process.env.APP_NAME || 'nestjs-core',
  port: parseInt(process.env.APP_PORT ?? '3000', 10),
  prefix: process.env.APP_PREFIX || 'api',
  version: process.env.APP_VERSION || 'v1',
}));
