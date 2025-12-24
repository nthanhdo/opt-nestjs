import { registerAs } from '@nestjs/config';

const isTrue = (v?: string) => v === 'true';

export const featureConfig = registerAs('feature', () => {
  const mockEnabled = isTrue(process.env.ENABLE_MOCK);

  return {
    /**
     * =========================
     * MOCK FEATURE FLAGS
     * =========================
     */
    mock: {
      enabled: mockEnabled,
      auth: isTrue(process.env.MOCK_AUTH) || mockEnabled,
      user: isTrue(process.env.MOCK_USER) || mockEnabled,
      product: isTrue(process.env.MOCK_PRODUCT) || mockEnabled,
    },

    /**
     * =========================
     * BENCHMARK
     * =========================
     */
    benchmark: isTrue(process.env.ENABLE_BENCHMARK),

    /**
     * =========================
     * LOGGER
     * =========================
     */
    logger: {
      enabled: process.env.ENABLE_LOGGER !== 'false',
    },
  };
});
