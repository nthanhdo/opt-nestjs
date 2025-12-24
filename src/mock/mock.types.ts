// src/mock/mock.types.ts
import { ExecutionContext } from '@nestjs/common';

export type MockResolver<T = unknown> = (
  context: ExecutionContext,
) => T | Promise<T>;
