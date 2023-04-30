import { AuthorizationStatus, FetchStatus } from '../../const';
import { storedUser } from '../../mock/user';
import { checkAuthStatus, login, logout } from './api-actions';
import { userSlice } from './user-slice';

describe('Reducer: userSlice', () => {
  it('without additional parameters should return initial state', () => {
    const state = {
      userLoadingStatus: FetchStatus.Idle,
      authStatus: AuthorizationStatus.Unknown,
      user: null,
    };
    expect(userSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        userLoadingStatus: FetchStatus.Idle,
        authStatus: AuthorizationStatus.Unknown,
        user: null,
      });
  });

  it('should update user by load user, set FetchStatus.Success to userLoadingStatus and set AuthorizationStatus.Auth to authStatus (check)', () => {
    const state = {
      userLoadingStatus: FetchStatus.Idle,
      authStatus: AuthorizationStatus.Unknown,
      user: null,
    };
    expect(userSlice.reducer(state, {type: checkAuthStatus.fulfilled.type, payload: storedUser}))
      .toEqual({
        userLoadingStatus: FetchStatus.Success,
        authStatus: AuthorizationStatus.Auth,
        user: storedUser,
      });
  });

  it('should set FetchStatus.Pending to userLoadingStatus while auth status is checking', () => {
    const state = {
      userLoadingStatus: FetchStatus.Idle,
      authStatus: AuthorizationStatus.Unknown,
      user: null,
    };
    expect(userSlice.reducer(state, {type: checkAuthStatus.pending.type}))
      .toEqual({
        userLoadingStatus: FetchStatus.Pending,
        authStatus: AuthorizationStatus.Unknown,
        user: null,
      });
  });

  it('should set FetchStatus.Failed to userLoadingStatus if server is unavailable (check)', () => {
    const state = {
      userLoadingStatus: FetchStatus.Idle,
      authStatus: AuthorizationStatus.Unknown,
      user: null,
    };
    expect(userSlice.reducer(state, {type: checkAuthStatus.rejected.type}))
      .toEqual({
        userLoadingStatus: FetchStatus.Failed,
        authStatus: AuthorizationStatus.NoAuth,
        user: null,
      });
  });

  it('should update user by load user, set FetchStatus.Success to userLoadingStatus and set AuthorizationStatus.Auth to authStatus (login)', () => {
    const state = {
      userLoadingStatus: FetchStatus.Idle,
      authStatus: AuthorizationStatus.Unknown,
      user: null,
    };
    expect(userSlice.reducer(state, {type: login.fulfilled.type, payload: storedUser}))
      .toEqual({
        userLoadingStatus: FetchStatus.Success,
        authStatus: AuthorizationStatus.Auth,
        user: storedUser,
      });
  });

  it('should set FetchStatus.Pending to userLoadingStatus while user is loading', () => {
    const state = {
      userLoadingStatus: FetchStatus.Idle,
      authStatus: AuthorizationStatus.Unknown,
      user: null,
    };
    expect(userSlice.reducer(state, {type: login.pending.type}))
      .toEqual({
        userLoadingStatus: FetchStatus.Pending,
        authStatus: AuthorizationStatus.Unknown,
        user: null,
      });
  });

  it('should set FetchStatus.Failed to userLoadingStatus if server is unavailable (login)', () => {
    const state = {
      userLoadingStatus: FetchStatus.Idle,
      authStatus: AuthorizationStatus.Unknown,
      user: null,
    };
    expect(userSlice.reducer(state, {type: login.rejected.type}))
      .toEqual({
        userLoadingStatus: FetchStatus.Failed,
        authStatus: AuthorizationStatus.NoAuth,
        user: null,
      });
  });

  it('should set user: null, set FetchStatus.Success to userLoadingStatus and set AuthorizationStatus.NoAuth to authStatus', () => {
    const state = {
      userLoadingStatus: FetchStatus.Success,
      authStatus: AuthorizationStatus.Auth,
      user: storedUser,
    };
    expect(userSlice.reducer(state, {type: logout.fulfilled.type}))
      .toEqual({
        userLoadingStatus: FetchStatus.Success,
        authStatus: AuthorizationStatus.NoAuth,
        user: null,
      });
  });

  it('should set FetchStatus.Pending to userLoadingStatus while logout is in process', () => {
    const state = {
      userLoadingStatus: FetchStatus.Success,
      authStatus: AuthorizationStatus.Auth,
      user: null,
    };
    expect(userSlice.reducer(state, {type: logout.pending.type}))
      .toEqual({
        userLoadingStatus: FetchStatus.Pending,
        authStatus: AuthorizationStatus.Auth,
        user: null,
      });
  });

  it('should set FetchStatus.Failed to userLoadingStatus if server is unavailable (logout)', () => {
    const state = {
      userLoadingStatus: FetchStatus.Success,
      authStatus: AuthorizationStatus.Auth,
      user: null,
    };
    expect(userSlice.reducer(state, {type: logout.rejected.type}))
      .toEqual({
        userLoadingStatus: FetchStatus.Failed,
        authStatus: AuthorizationStatus.Auth,
        user: null,
      });
  });
});
