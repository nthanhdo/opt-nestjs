export const FEATURES = {
  mock: process.env.MOCK_MODE === 'true',
  debug: process.env.DEBUG_MODE === 'true',
  benchmark: process.env.BENCHMARK === 'true',
  adminMode: process.env.ADMIN_MODE === 'true',
  abTesting: process.env.AB_TESTING === 'true',
};
