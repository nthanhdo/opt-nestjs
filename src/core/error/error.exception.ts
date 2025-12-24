import { HttpStatus } from '@nestjs/common';
import { ErrorCode } from './error.code';

export class BaseAppException extends Error {
  constructor(
    public readonly message: string,
    public readonly errorCode: ErrorCode,
    public readonly status: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    super(message);
  }
}
