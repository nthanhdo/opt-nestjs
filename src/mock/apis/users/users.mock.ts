import { registerMock } from '../../mock.registry';
import { fakeUserProfile } from '../../fakers';

export const registerUserMocks = () => {
  registerMock('users.profile', () => fakeUserProfile());
};
