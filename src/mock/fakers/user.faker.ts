import { faker } from '@faker-js/faker';

export const fakeUserProfile = () => ({
  id: faker.string.uuid(),
  email: faker.internet.email(),
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
  role: 'USER',
  createdAt: faker.date.past(),
});
