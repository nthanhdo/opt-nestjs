import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

import { MOCK_KEY } from '../decorators/mockable.decorator';
import { resolveMock } from '../mock.registry';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MockInterceptor implements NestInterceptor {
  constructor(
    private readonly reflector: Reflector,
    private readonly config: ConfigService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const meta = this.reflector.get<{ key: string; delay?: number; errorRate?: number }>(
      MOCK_KEY,
      context.getHandler(),
    );

    if (!meta) return next.handle();

    const globalMockEnabled = this.config.get<boolean>('feature.mock.enabled');
    if (!globalMockEnabled) return next.handle();

    const mockData = resolveMock(meta.key);
    if (!mockData) return next.handle();

    const response$ = of(mockData).pipe(
      mergeMap((data) => {
        // Simulate random error
        if (meta.errorRate && Math.random() < meta.errorRate) {
          return throwError(() => new Error('Mocked random error'));
        }
        return of(data);
      }),
      delay(meta.delay ?? 300), // default delay 300ms
    );

    return response$;
  }
}
