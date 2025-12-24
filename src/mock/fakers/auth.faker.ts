import { faker } from '@faker-js/faker';

export const fakeLoginResponse = () => ({
  accessToken: faker.string.uuid(),
  refreshToken: faker.string.uuid(),
  expiresIn: 3600,
  user: {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: 'USER',
  },
});
