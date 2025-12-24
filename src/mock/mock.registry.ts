// File: src/shared/mock/mock.registry.ts
export type MockResolver<T = unknown> = (ctx?: unknown) => T;

const registry = new Map<string, MockResolver>();

export const registerMock = (key: string, resolver: MockResolver) => {
  if (registry.has(key)) {
    console.warn(`[MOCK] Duplicate mock key detected: ${key}`);
  }
  registry.set(key, resolver);
};

export const hasMock = (key: string) => registry.has(key);

export const resolveMock = <T = unknown>(key: string, ctx?: unknown): T | null => {
  console.log(process.env.ENABLE_MOCK, key, hasMock(key))
  if (process.env.ENABLE_MOCK?.toLowerCase() === 'true' && hasMock(key)) {
    const resolver = registry.get(key);
    return resolver ? (resolver(ctx) as T) : null;
  }
  return null;
};

/**
 * Resolve mock nếu có, nếu không trả về fallback
 */
export const resolveMockSafe = <T = unknown>(
  key: string,
  ctx?: unknown,
  fallback?: T
): T | null => {
  const data = resolveMock(key, ctx) as T | null; // ép kiểu
  return data ?? fallback ?? null;
};
