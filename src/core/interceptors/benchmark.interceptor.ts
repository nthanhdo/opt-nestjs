import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { GlobalContext } from '../context/global-context';

@Injectable()
export class BenchmarkInterceptor implements NestInterceptor {
  constructor(private ctx: GlobalContext) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (!this.ctx.get('features.benchmark', false)) return next.handle();

    const now = Date.now();
    const req = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(() => console.log(`[BENCHMARK] ${req.method} ${req.url} - ${Date.now() - now}ms`)),
    );
  }
}
