export default () => ({
  jwtSecret: process.env.JWT_SECRET || 'secret',
  saltRounds: parseInt(process.env.SALT_ROUNDS ?? '10', 10),
});
