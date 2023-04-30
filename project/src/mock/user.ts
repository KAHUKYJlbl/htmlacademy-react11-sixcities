import { StoredUser, User } from '../types/api/login';

export const storedUser: StoredUser = {
  avatarUrl: 'url.com',
  id: 1,
  isPro: false,
  name: 'name',
  email: 'email@email.com',
};

export const user: User = {
  avatarUrl: 'url.com',
  id: 1,
  isPro: false,
  name: 'name',
  email: 'email@email.com',
  token: 'secret'
};
