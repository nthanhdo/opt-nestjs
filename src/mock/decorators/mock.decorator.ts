import { SetMetadata } from '@nestjs/common';

export const MOCK_KEY = 'mock_enabled';
export const Mock = () => SetMetadata(MOCK_KEY, true);
