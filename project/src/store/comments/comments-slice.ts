import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { fetchComments, postNewComment } from './api-actions';
import { Comment } from '../../types/offer/comment';

type InitialState = {
  commentsLoadingStatus: FetchStatus;
  commentPostingStatus: FetchStatus;
  comments: Comment[];
}

const initialState: InitialState = {
  commentsLoadingStatus: FetchStatus.Idle,
  commentPostingStatus: FetchStatus.Idle,
  comments: [],
};

export const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsLoadingStatus = FetchStatus.Success;
      })
      .addCase(postNewComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsLoadingStatus = FetchStatus.Success;
        state.commentPostingStatus = FetchStatus.Success;
      })
      .addCase(postNewComment.pending, (state) => {
        state.commentsLoadingStatus = FetchStatus.Pending;
        state.commentPostingStatus = FetchStatus.Pending;
      })
      .addCase(postNewComment.rejected, (state) => {
        state.commentPostingStatus = FetchStatus.Failed;
        state.commentsLoadingStatus = FetchStatus.Success;
      });
  }
});
