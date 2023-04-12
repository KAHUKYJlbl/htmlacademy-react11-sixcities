import { Person } from '../offer/person';

export type AuthData = {
  login: string;
  password: string;
};

export type User = Person & {
  email: string;
  token: string;
};
