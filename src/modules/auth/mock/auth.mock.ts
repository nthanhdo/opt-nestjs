// File: src/modules/auth/mock/auth.mock.ts
import { faker } from '@faker-js/faker';

export const mockLoginResponse = () => ({
  accessToken: faker.string.uuid(),
  refreshToken: faker.string.uuid(),
  expiresIn: 3600,
  user: {
    id: `user_${faker.string.uuid()}`,
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
  },
});
