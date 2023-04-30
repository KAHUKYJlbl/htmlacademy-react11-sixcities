import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';

import { createAPI } from '../../services/api';
import { State } from '../../types/state/state';
import { offers } from '../../mock/offers';
import { fetchNearby, fetchOffer } from './api-actions';

describe('Room async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchOffer when GET /hotels/:hotelId', async () => {
    const id = '1';

    const store = mockStore();

    mockAPI
      .onGet(/\/hotels\/\d+/)
      .reply(200, offers[0]);

    await store.dispatch(fetchOffer(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffer.pending.type,
      fetchOffer.fulfilled.type
    ]);
  });

  it('should dispatch fetchOffer when GET /hotels/:hotelId/nearby', async () => {
    const id = '1';

    const store = mockStore();

    mockAPI
      .onGet(/\/hotels\/\d+\/nearby/)
      .reply(200, offers.slice(0, 3));

    await store.dispatch(fetchNearby(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchNearby.pending.type,
      fetchNearby.fulfilled.type
    ]);
  });
});
