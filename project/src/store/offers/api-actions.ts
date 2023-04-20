import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../../types/state/state';
import { Offer } from '../../types/offer/offer';
import { APIRoute } from '../../const';
import { toast } from 'react-toastify';

export const fetchOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'app/fetchOffers',
  async (_arg, {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.get<Offer[]>(APIRoute.Offers);
      return data;
    } catch (err) {
      toast.error('Offers loading failed. Try again.');
      throw err;
    }
  },
);
