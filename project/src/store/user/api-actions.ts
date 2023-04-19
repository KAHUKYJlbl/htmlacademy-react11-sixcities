import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import { AppDispatch, State } from '../../types/state/state';
import { User } from '../../types/api/login';
import { AuthData } from '../../types/api/login';

import { APIRoute, AppRoute } from '../../const';
import { redirectToRoute } from '../actions/app-actions';

export const checkAuthStatus = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthStatus',
  async (_arg, {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.get<User>(APIRoute.Login);
      return data;
    } catch (err) {
      dispatch(redirectToRoute(AppRoute.Main));
      toast.error('Login check failed.', {position: toast.POSITION.BOTTOM_RIGHT});
      throw err;
    }
  },
);

export const login = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.post<User>(APIRoute.Login, {email, password});
      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    } catch (err) {
      toast.error('Login failed. Please try again.', {position: toast.POSITION.BOTTOM_RIGHT});
      throw err;
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
    try {
      await axios.delete(APIRoute.Logout);
    } catch (err) {
      toast.error('Logout failed. Please try again.', {position: toast.POSITION.BOTTOM_RIGHT});
      throw err;
    }
  },
);
