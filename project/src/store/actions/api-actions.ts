import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../../types/state/state';
import { Offer } from '../../types/offer/offer';
import { APIRoute, AuthorizationStatus } from '../../const';
import { setAuthStatus, setIsLoading } from './app-actions';
import { getOffers } from './offers-actions';
import { User } from '../../types/offer/person';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchOffers',
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
  'api/checkAuthStatus',
  async (_arg, {dispatch, extra: axios}) => {
    try {
      await axios.get<User>(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);
