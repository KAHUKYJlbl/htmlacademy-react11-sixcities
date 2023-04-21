import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import { Offer } from '../../types/offer/offer';
import { AppDispatch, State } from '../../types/state/state';
import { APIRoute } from '../../const';
import { ToggleFavoriteData } from '../../types/api/favorites';
import { generatePath } from 'react-router-dom';

export const fetchFavorites = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchFavorites',
  async (_arg, {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.get<Offer[]>(APIRoute.Favorites);
      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        toast.error('You are not logged in or you do not have permission to this page.');
      }

      throw error;
    }
  },
);

export const toggleFavoriteStatus = createAsyncThunk<Offer, ToggleFavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/toggleFavoriteStatus',
  async ({hotelId, status}, {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.post<Offer>(
        generatePath( APIRoute.ToggleFavorite, {
          hotelId: hotelId.toString(),
          status: status.toString(),
        })
      );

      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        toast.error('You are not logged in or you do not have permission to this page.');
      }

      throw error;
    }
  },
);
