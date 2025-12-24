import { registerAs } from '@nestjs/config';

export const loggerConfig = registerAs('logger', () => ({
  level: process.env.LOG_LEVEL || 'info',
  pretty: process.env.LOG_PRETTY === 'true',
}));
