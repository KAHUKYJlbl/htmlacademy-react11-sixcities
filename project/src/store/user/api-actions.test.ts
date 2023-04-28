import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';

import { createAPI } from '../../services/api';
import { State } from '../../types/state/state';
import { APIRoute } from '../../const';
import { checkAuthStatus, login, logout } from './api-actions';
import { fetchFavorites } from '../favorites/api-actions';
import { user } from '../../mock/user';
import { AuthData } from '../../types/api/login';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200 and dispatch FetchFavorites', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, user);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthStatus());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthStatus.pending.type,
      fetchFavorites.pending.type,
      checkAuthStatus.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and FetchFavorites when POST /login', async () => {
    const fakeAuth: AuthData = {email: 'test@test.ru', password: '123456'};

    const store = mockStore();

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, user);

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(login(fakeAuth));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      login.pending.type,
      fetchFavorites.pending.type,
      login.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', user.token);
  });

  it('should dispatch Logout when DELETE /logout', async () => {
    const store = mockStore();

    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logout());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logout.pending.type,
      logout.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });
});
