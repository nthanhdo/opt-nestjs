export default () => ({
  name: process.env.APP_NAME || 'NestApp',
  port: parseInt(process.env.APP_PORT ?? '3000', 10),
});
