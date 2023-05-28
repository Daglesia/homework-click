import { faker } from "@faker-js/faker";
import { Message } from "@/types/messages";

// this code is causing hydration text content mismatches. Ignoring, as mocks should never hit production
const randomMessage = (): Message => ({
  id: faker.number.int(),
  email: faker.internet.email(),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs({ min: 1, max: 4 }),
});

export const createMessages = (count: number): Message[] =>
  Array.from({ length: count }, randomMessage);
