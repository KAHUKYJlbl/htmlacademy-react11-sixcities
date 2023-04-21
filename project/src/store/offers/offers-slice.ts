import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offer/offer';
import { fetchOffers } from '../offers/api-actions';

type InitialState = {
  offersFetchStatus: FetchStatus;
  offers: Offer[] | [];
}

const initialState: InitialState = {
  offersFetchStatus: FetchStatus.Idle,
  offers: [],
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offersFetchStatus = FetchStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.offersFetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offersFetchStatus = FetchStatus.Failed;
      });
  }
});
