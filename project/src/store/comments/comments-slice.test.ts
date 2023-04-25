import { FetchStatus } from '../../const';
import { comments } from '../../mock/comments';
import { fetchComments, postNewComment } from './api-actions';
import { commentsSlice } from './comments-slice';

describe('Reducer: commentsSlice', () => {
  it('without additional parameters should return initial state', () => {
    const state = {commentsLoadingStatus: FetchStatus.Idle, commentPostingStatus: FetchStatus.Idle, comments: []};
    expect(commentsSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual({commentsLoadingStatus: FetchStatus.Idle, commentPostingStatus: FetchStatus.Idle, comments: []});
  });

  it('should update comments by load comments and set FetchStatus.Success to commentsLoadingStatus', () => {
    const state = {commentsLoadingStatus: FetchStatus.Idle, commentPostingStatus: FetchStatus.Idle, comments: []};
    expect(commentsSlice.reducer(state, {type: fetchComments.fulfilled.type, payload: comments}))
      .toEqual({commentsLoadingStatus: FetchStatus.Success, commentPostingStatus: FetchStatus.Idle, comments});
  });

  it('should set FetchStatus.Pending to commentsLoadingStatus while comments are loading', () => {
    const state = {commentsLoadingStatus: FetchStatus.Success, commentPostingStatus: FetchStatus.Idle, comments: []};
    expect(commentsSlice.reducer(state, {type: fetchComments.pending.type}))
      .toEqual({commentsLoadingStatus: FetchStatus.Pending, commentPostingStatus: FetchStatus.Idle, comments: []});
  });

  it('should set FetchStatus.Failed to commentsLoadingStatus if server is unavailable', () => {
    const state = {commentsLoadingStatus: FetchStatus.Success, commentPostingStatus: FetchStatus.Idle, comments: []};
    expect(commentsSlice.reducer(state, {type: fetchComments.rejected.type}))
      .toEqual({commentsLoadingStatus: FetchStatus.Failed, commentPostingStatus: FetchStatus.Idle, comments: []});
  });

  it('should update comments by load comments and set FetchStatus.Success to commentPostingStatus', () => {
    const state = {commentsLoadingStatus: FetchStatus.Idle, commentPostingStatus: FetchStatus.Idle, comments: []};
    expect(commentsSlice.reducer(state, {type: postNewComment.fulfilled.type, payload: comments}))
      .toEqual({commentsLoadingStatus: FetchStatus.Idle, commentPostingStatus: FetchStatus.Success, comments});
  });

  it('should set FetchStatus.Pending to commentPostingStatus while comment is posting', () => {
    const state = {commentsLoadingStatus: FetchStatus.Success, commentPostingStatus: FetchStatus.Idle, comments: []};
    expect(commentsSlice.reducer(state, {type: postNewComment.pending.type}))
      .toEqual({commentsLoadingStatus: FetchStatus.Success, commentPostingStatus: FetchStatus.Pending, comments: []});
  });

  it('should set FetchStatus.Failed to commentPostingStatus if server is unavailable', () => {
    const state = {commentsLoadingStatus: FetchStatus.Success, commentPostingStatus: FetchStatus.Idle, comments: []};
    expect(commentsSlice.reducer(state, {type: postNewComment.rejected.type}))
      .toEqual({commentsLoadingStatus: FetchStatus.Success, commentPostingStatus: FetchStatus.Failed, comments: []});
  });
});
