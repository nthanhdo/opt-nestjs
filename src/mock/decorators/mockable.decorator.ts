import { applyDecorators, SetMetadata, UseInterceptors } from '@nestjs/common';
import { MockInterceptor } from '../interceptors/mock.interceptor';

export const MOCK_KEY = 'mock:key';

/**
 * @Mockable decorator
 * Dùng để gắn cho Controller method
 * - key: string → key trong mock registry
 * - options.delay?: number → ms giả lập response time
 * - options.errorRate?: number → tỷ lệ trả lỗi ngẫu nhiên
 */
export function Mockable(
  key: string,
  options?: { delay?: number; errorRate?: number },
) {
  return applyDecorators(
    SetMetadata(MOCK_KEY, { key, ...options }),
    UseInterceptors(MockInterceptor),
  );
}
