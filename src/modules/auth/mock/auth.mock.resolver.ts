// File: src/modules/auth/mock/auth.mock.resolver.ts
import { registerMock } from '../../../mock/mock.registry';
import { mockLoginResponse } from './auth.mock';

export const AUTH_LOGIN_MOCK_KEY = 'AUTH_LOGIN';

export const registerAuthMocks = () => {
  registerMock(AUTH_LOGIN_MOCK_KEY, mockLoginResponse);
};
