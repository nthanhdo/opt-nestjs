import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { GlobalContext } from '../context/global-context';

@Injectable()
export class MockInterceptor implements NestInterceptor {
  constructor(private ctx: GlobalContext, private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (!this.ctx.get('features.mock', false)) return next.handle();

    const mockData = this.reflector.get('mock:data', context.getHandler());
    if (!mockData) return next.handle();

    return of({ mock: true, data: mockData });
  }
}
