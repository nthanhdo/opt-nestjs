import { registerMock } from '../../mock.registry';
import { fakeLoginResponse } from '../../fakers';

export const registerAuthMocks = () => {
  registerMock('auth.login', () => fakeLoginResponse());

  registerMock('auth.refresh', () => ({
    accessToken: 'new-access-token',
    expiresIn: 3600,
  }));
};
