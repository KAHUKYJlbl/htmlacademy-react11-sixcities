import { generatePath } from 'react-router-dom';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import { AppDispatch, State } from '../../types/state/state';

import { APIRoute } from '../../const';
import { Offer } from '../../types/offer/offer';
import { Comment } from '../../types/offer/comment';

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
    } catch (err) {
      toast.error('Room loading failed. Please try again.', {position: toast.POSITION.BOTTOM_RIGHT});
      throw err;
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
