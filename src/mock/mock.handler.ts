import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {Observable, of} from 'rxjs';

import {MOCK_HEADER, MOCK_ENABLED_ENV, MOCK_KEY} from './mock.constants';
import {resolveMock} from './mock.registry';

@Injectable()
export class MockInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const mockKey = this.reflector.get<string>(
      MOCK_KEY,
      context.getHandler(),
    );

    if (!mockKey) {
      return next.handle();
    }

    const envEnabled = process.env[MOCK_ENABLED_ENV] === 'true';
    const headerEnabled = request.headers[MOCK_HEADER] === 'true';

    if (!envEnabled && !headerEnabled) {
      return next.handle();
    }

    const mockResponse = resolveMock(mockKey, {
      request,
    });

    if (mockResponse === null) {
      return next.handle();
    }

    return of(mockResponse);
  }
}
