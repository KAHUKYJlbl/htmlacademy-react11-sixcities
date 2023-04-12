import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../../types/state/state';
import { Offer } from '../../types/offer/offer';
import { User } from '../../types/api/login';
import { AuthData } from '../../types/api/login';

import { setAuthStatus, setIsLoading } from './app-actions';
import { getOffers } from './offers-actions';
import { dropToken, setToken } from '../../services/token';
import { APIRoute, AuthorizationStatus } from '../../const';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: axios}) => {
    dispatch(setIsLoading(true));
    const {data} = await axios.get<Offer[]>(APIRoute.Offers);
    dispatch(setIsLoading(false));
    dispatch(getOffers(data));
  },
);

export const checkAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthStatus',
  async (_arg, {dispatch, extra: axios}) => {
    try {
      await axios.get<User>(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: axios}) => {
    try {
      const {data: {token}} = await axios.post<User>(APIRoute.Login, {email, password});
      setToken(token);

      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: axios}) => {
    await axios.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  },
);
