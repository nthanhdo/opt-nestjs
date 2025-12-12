export default () => ({
  host: process.env.MEMCACHED_HOST || 'localhost',
  port: parseInt((process.env.MEMCACHED_PORT || '11211') as string, 10),
});
