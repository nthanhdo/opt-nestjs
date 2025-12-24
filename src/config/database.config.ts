import { registerAs } from '@nestjs/config';

export type DatabaseDriver = 'mongo' | 'postgres' | 'mysql';

export const databaseConfig = registerAs('database', () => ({
  driver: (process.env.DB_DRIVER || 'mongo') as DatabaseDriver,
  uri: process.env.DB_URI,
}));
