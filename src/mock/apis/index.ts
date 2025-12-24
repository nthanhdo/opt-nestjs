import { registerAuthMocks } from './auth/auth.mock';
import { registerUserMocks } from './users/users.mock';

export const registerAllMocks = () => {
  registerAuthMocks();
  registerUserMocks();
};
