import { FetchStatus, NameSpace } from '../../const';
import { Comment } from '../../types/offer/comment';
import { State } from '../../types/state/state';

export const getComments = (state: State): Comment[] => state[NameSpace.Room].comments;

export const isOfferLoading = (state: State): boolean => (
  state[NameSpace.Room].isOfferLoading === FetchStatus.Idle
  || state[NameSpace.Room].isOfferLoading === FetchStatus.Pending
);
