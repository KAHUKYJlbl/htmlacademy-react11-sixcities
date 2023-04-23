import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offer/offer';
import { fetchOffers } from '../offers/api-actions';
import { toggleFavoriteStatus } from '../favorites/api-actions';
import { logout } from '../user/api-actions';

type InitialState = {
  offersLoadingStatus: FetchStatus;
  offers: Offer[] | [];
}

const initialState: InitialState = {
  offersLoadingStatus: FetchStatus.Idle,
  offers: [],
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offersLoadingStatus = FetchStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.offersLoadingStatus = FetchStatus.Pending;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offersLoadingStatus = FetchStatus.Failed;
      })
      .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
        state.offers = state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            return action.payload;
          }
          return offer;
        });
      })
      .addCase(logout.fulfilled, (state) => {
        state.offers = state.offers.map((offer) => (
          {...offer, isFavorite: false}
        ));
      });
  }
});
