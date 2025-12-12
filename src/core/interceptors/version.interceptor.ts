import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class VersionInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const version = this.reflector.get<string>('api:version', context.getHandler());
    context.switchToHttp().getResponse().setHeader('X-API-Version', version || 'v1');
    return next.handle();
  }
}
