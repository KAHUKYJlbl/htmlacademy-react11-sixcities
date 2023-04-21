import { FetchStatus, NameSpace } from '../../const';
import { Comment } from '../../types/offer/comment';
import { State } from '../../types/state/state';

export const getComments = (state: State): Comment[] => state[NameSpace.Comments].comments;

export const isCommentsLoading = (state: State): boolean => (
  state[NameSpace.Comments].commentsLoadingStatus === FetchStatus.Idle
  || state[NameSpace.Comments].commentsLoadingStatus === FetchStatus.Pending
);

export const getCommentPostingStatus = (state: State): FetchStatus => state[NameSpace.Comments].commentPostingStatus;
