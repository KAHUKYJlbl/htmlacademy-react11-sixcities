import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offer/offer';
import { fetchOffers } from '../offers/api-actions';

type InitialState = {
  isOffersLoading: FetchStatus;
  offers: Offer[] | [];
}

const initialState: InitialState = {
  isOffersLoading: FetchStatus.Idle,
  offers: [],
};

export const offersSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isOffersLoading = FetchStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = FetchStatus.Pending;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = FetchStatus.Failed;
      });
  }
});
