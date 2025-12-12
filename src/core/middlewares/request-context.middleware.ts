import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestContext } from '../types/index';
import { randomUUID } from 'crypto';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const context: RequestContext = {
      requestId: randomUUID(),
      ip: req.ip,
    };
    req['context'] = context;
    next();
  }
}
