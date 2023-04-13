import { Person } from '../offer/person';

export type AuthData = {
  email: string;
  password: string;
};

export type StoredUser = Person & {
  email: string;
};

export type User = StoredUser & {
  token: string;
};
