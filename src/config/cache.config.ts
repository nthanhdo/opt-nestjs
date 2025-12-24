import { registerAs } from '@nestjs/config';

export type CacheDriver = 'redis' | 'rabbit' | 'memcached';

export const cacheConfig = registerAs('cache', () => ({
  enabled: process.env.CACHE_ENABLED === 'true',
  drivers: (process.env.CACHE_DRIVERS || '')
    .split(',')
    .filter(Boolean)
    .map((d) => d.trim() as CacheDriver),
}));
