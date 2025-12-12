import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, of } from 'rxjs';
import { MOCK_KEY } from '../decorators/mock.decorator';
import { MockAuthService } from '../auth/mock-auth.service';

@Injectable()
export class MockInterceptor implements NestInterceptor {
  constructor(
    private reflector: Reflector,
    private mockAuth: MockAuthService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isMock = this.reflector.get<boolean>(
      MOCK_KEY,
      context.getHandler(),
    );

    if (!isMock) return next.handle();

    const handler = context.getHandler().name;

    if (handler === 'login') return of(this.mockAuth.login());
    if (handler === 'verifyToken') return of(this.mockAuth.verifyToken());

    return next.handle();
  }
}
