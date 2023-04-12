import { Person } from '../offer/person';

export type AuthData = {
  login: string;
  password: string;
};

export type safeUser = Person & {
  email: string;
};

export type User = safeUser & {
  token: string;
};
