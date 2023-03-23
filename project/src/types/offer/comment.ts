import { Person } from './person';

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Person;
}
