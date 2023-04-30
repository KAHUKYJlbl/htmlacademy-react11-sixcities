import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';

import { createAPI } from '../../services/api';
import { State } from '../../types/state/state';
import { offers } from '../../mock/offers';
import { APIRoute } from '../../const';
import { fetchFavorites, toggleFavoriteStatus } from './api-actions';

describe('Room async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchFavorites when GET /favorite', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Favorites)
      .reply(200, offers);

    await store.dispatch(fetchFavorites());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.fulfilled.type
    ]);
  });

  it('should dispatch toggleFavoriteStatus when POST /favorite/:hotelId/:status', async () => {
    const fakeHotelStatus = {hotelId: 1, status: 1};
    const store = mockStore();

    mockAPI
      .onPost(/\/favorite\/\d+\/\d+/)
      .reply(200, offers[0]);

    await store.dispatch(toggleFavoriteStatus(fakeHotelStatus));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      toggleFavoriteStatus.pending.type,
      toggleFavoriteStatus.fulfilled.type
    ]);
  });
});
