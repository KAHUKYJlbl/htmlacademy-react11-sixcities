import { NewComment } from '../api/comment';
import { Person } from './person';

export type Comment = NewComment & {
  date: string;
  id: number;
  user: Person;
}
