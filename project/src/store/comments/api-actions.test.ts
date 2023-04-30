import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';

import { createAPI } from '../../services/api';
import { State } from '../../types/state/state';
import { fetchComments, postNewComment } from './api-actions';
import { comments } from '../../mock/comments';

describe('Room async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchComments when GET /comments/:hotelId', async () => {
    const id = '1';
    const store = mockStore();

    mockAPI
      .onGet(/\/comments\/\d+/)
      .reply(200, comments);

    await store.dispatch(fetchComments(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchComments.pending.type,
      fetchComments.fulfilled.type
    ]);
  });

  it('should dispatch postNewComment when POST /comments/:hotelId', async () => {
    const fakeNewComment = {id: '1', comment: 'string', rating: 1};
    const store = mockStore();

    mockAPI
      .onPost(/\/comments\/\d+/)
      .reply(200, comments);

    await store.dispatch(postNewComment(fakeNewComment));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      postNewComment.pending.type,
      postNewComment.fulfilled.type
    ]);
  });
});
