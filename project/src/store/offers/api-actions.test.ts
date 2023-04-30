import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';

import { createAPI } from '../../services/api';
import { State } from '../../types/state/state';
import { offers } from '../../mock/offers';
import { APIRoute } from '../../const';
import { fetchOffers } from './api-actions';

describe('Offers async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchOffers when GET /hotels', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, offers);

    await store.dispatch(fetchOffers());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffers.pending.type,
      fetchOffers.fulfilled.type
    ]);
  });
});
