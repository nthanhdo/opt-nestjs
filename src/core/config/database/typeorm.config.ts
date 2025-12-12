export default () => ({
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT ?? '5432', 10),
  username: process.env.TYPEORM_USER || 'postgres',
  password: process.env.TYPEORM_PASSWORD || 'postgres',
  database: process.env.TYPEORM_DB || 'appdb',
  synchronize: process.env.TYPEORM_SYNC === 'true',
});
