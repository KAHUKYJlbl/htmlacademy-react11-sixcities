import { createSelector } from '@reduxjs/toolkit';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const';
import { StoredUser } from '../../types/api/login';
import { State } from '../../types/state/state';

export const getUser = (state: State): StoredUser | null => state[NameSpace.User].user;

export const getUserLoadingStatus = (state: State): FetchStatus => state[NameSpace.User].userLoadingStatus;

export const getAuthStatus = createSelector(
  (state: State): AuthorizationStatus => state[NameSpace.User].authStatus,
  (status) => ({
    auth: status === AuthorizationStatus.Auth,
    noAuth: status === AuthorizationStatus.NoAuth,
    unknown: status === AuthorizationStatus.Unknown,
  })
);
