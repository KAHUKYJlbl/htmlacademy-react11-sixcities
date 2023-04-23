import { createSelector } from '@reduxjs/toolkit';

import { FetchStatus, NameSpace } from '../../const';
import { Comment } from '../../types/offer/comment';
import { State } from '../../types/state/state';

export const getComments = (state: State): Comment[] => state[NameSpace.Comments].comments;

export const getCommentsLoadingStatus = createSelector(
  [(state: State): FetchStatus => state[NameSpace.Comments].commentsLoadingStatus],
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Success,
  })
);

export const getCommentPostingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Comments].commentPostingStatus,
  (status) => ({
    isLoading: status === FetchStatus.Pending,
    isSuccess: status === FetchStatus.Success,
  })
);
