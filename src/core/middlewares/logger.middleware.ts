import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { GlobalContext } from '../context/global-context';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  constructor(private ctx: GlobalContext) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (this.ctx.get('features.debug', false)) {
      this.logger.log(`${req.method} ${req.originalUrl}`);
    }
    next();
  }
}
