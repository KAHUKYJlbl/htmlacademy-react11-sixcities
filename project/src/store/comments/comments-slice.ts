import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { fetchComments } from './api-actions';
import { Comment } from '../../types/offer/comment';

type InitialState = {
  isCommentsLoading: FetchStatus;
  comments: Comment[];
}

const initialState: InitialState = {
  isCommentsLoading: FetchStatus.Idle,
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
      });
  }
});
