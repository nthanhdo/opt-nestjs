// src/core/decorators/mock-action.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const MOCK_ACTION_KEY = 'mock:action';
export const MockAction = (action: string) =>
  SetMetadata(MOCK_ACTION_KEY, action);
