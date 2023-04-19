import {createSlice} from '@reduxjs/toolkit';

import { StoredUser } from '../../types/api/login';

import {NameSpace, FetchStatus, AuthorizationStatus} from '../../const';
import { checkAuthStatus, login, logout } from './api-actions';
import { dropToken, setToken } from '../../services/token';

type InitialState = {
  isUserLoading: FetchStatus;
  authStatus: AuthorizationStatus;
  user: StoredUser | null;
}

const initialState: InitialState = {
  isUserLoading: FetchStatus.Idle,
  authStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.isUserLoading = FetchStatus.Success;
        state.authStatus = AuthorizationStatus.Auth;
        const {token, ...rest} = action.payload;
        state.user = rest;
      })
      .addCase(checkAuthStatus.pending, (state) => {
        state.isUserLoading = FetchStatus.Pending;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.isUserLoading = FetchStatus.Failed;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isUserLoading = FetchStatus.Success;
        state.authStatus = AuthorizationStatus.Auth;
        const {token, ...rest} = action.payload;
        setToken(token);
        state.user = rest;
      })
      .addCase(login.pending, (state) => {
        state.isUserLoading = FetchStatus.Pending;
      })
      .addCase(login.rejected, (state) => {
        state.isUserLoading = FetchStatus.Failed;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isUserLoading = FetchStatus.Success;
        state.authStatus = AuthorizationStatus.NoAuth;
        dropToken();
      })
      .addCase(logout.pending, (state) => {
        state.isUserLoading = FetchStatus.Pending;
      })
      .addCase(logout.rejected, (state) => {
        state.isUserLoading = FetchStatus.Failed;
        state.authStatus = AuthorizationStatus.Auth;
      });
  }
});
