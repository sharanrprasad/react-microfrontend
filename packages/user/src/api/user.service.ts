import { User } from "../types/user.ts";
import { faker } from "@faker-js/faker";

export const getUser = (): Promise<User> => {
  return Promise.resolve(createRandomUser());
};

export const createRandomUser = (): User => ({
  id: faker.string.uuid(),
  fullName: faker.person.fullName(),
  address: faker.location.streetAddress(),
  email: faker.internet.email(),
  registeredAt: faker.date.past().toISOString(),
});
