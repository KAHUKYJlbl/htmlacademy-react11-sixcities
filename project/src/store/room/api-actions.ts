import { generatePath } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import { AppDispatch, State } from '../../types/state/state';
import { Comment } from '../../types/offer/comment';
import { Offer } from '../../types/offer/offer';

import { APIRoute, AppRoute } from '../../const';
import { redirectToRoute } from '../actions/app-actions';

export const fetchOffer = createAsyncThunk<Offer, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchOffer',
  async (id = '0', {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.get<Offer>(generatePath(APIRoute.Offer, { hotelId: id }));

      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        dispatch(redirectToRoute(AppRoute.NotFound));
        toast.error('Room not found.', {position: toast.POSITION.BOTTOM_RIGHT});
      }

      throw error;
    }
  },
);

export const fetchNearby = createAsyncThunk<Offer[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchNearby',
  async (id = '0', {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.get<Offer[]>(generatePath(APIRoute.Nearby, { hotelId: id }));
      return data;
    } catch (err) {
      toast.error('Nearby offers loading failed.', {position: toast.POSITION.BOTTOM_RIGHT});
      throw err;
    }
  },
);

export const fetchComments = createAsyncThunk<Comment[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchComments',
  async (id = '0', {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.get<Comment[]>(generatePath(APIRoute.Comments, { hotelId: id }));
      return data;
    } catch (err) {
      toast.error('Comments loading failed.', {position: toast.POSITION.BOTTOM_RIGHT});
      throw err;
    }
  },
);
