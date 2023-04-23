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
      .addCase(fetchComments.pending, (state) => {
        state.commentsLoadingStatus = FetchStatus.Pending;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.commentsLoadingStatus = FetchStatus.Failed;
      })
      .addCase(postNewComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentPostingStatus = FetchStatus.Success;
      })
      .addCase(postNewComment.pending, (state) => {
        state.commentPostingStatus = FetchStatus.Pending;
      })
      .addCase(postNewComment.rejected, (state) => {
        state.commentPostingStatus = FetchStatus.Failed;
      });
  }
});
