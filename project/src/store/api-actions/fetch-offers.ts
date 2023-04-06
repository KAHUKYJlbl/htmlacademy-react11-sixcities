import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../../types/state/state';
import { Offer } from '../../types/offer/offer';
import { APIRoute } from '../../const';
import { setIsLoading } from '../actions/set-is-loading';
import { getOffers } from '../actions/get-offers';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: axios}) => {
    dispatch(setIsLoading(true));
    const {data} = await axios.get<Offer[]>(APIRoute.Offers);
    dispatch(setIsLoading(false));
    dispatch(getOffers(data));
  },
);
