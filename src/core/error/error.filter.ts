import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import {ErrorResponse} from './error.response';
import {BaseAppException} from './error.exception';
import {ErrorCode} from './error.code';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    /**
     * Default values
     */
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorCode = ErrorCode.INTERNAL_ERROR;
    let message = 'Internal server error';

    /**
     * App-defined exception
     */
    if (exception instanceof BaseAppException) {
      status = exception.status;
      errorCode = exception.errorCode;
      message = exception.message;
    }

    /**
     * Nest HttpException
     */
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res: any = exception.getResponse();
      message = res?.message || exception.message;
    }

    const errorResponse = ErrorResponse.fail({
      status,
      errorCode,
      message,
    });

    response.status(status).json(errorResponse);
  }
}
