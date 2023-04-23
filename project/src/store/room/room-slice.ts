import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { fetchNearby, fetchOffer } from './api-actions';
import { Offer } from '../../types/offer/offer';
import { toggleFavoriteStatus } from '../favorites/api-actions';
import { logout } from '../user/api-actions';

type InitialState = {
  offerLoadingStatus: FetchStatus;
  nearbyLoadingStatus: FetchStatus;
  offer: Offer | null;
  nearbyOffers: Offer[];
}

const initialState: InitialState = {
  offerLoadingStatus: FetchStatus.Idle,
  nearbyLoadingStatus: FetchStatus.Idle,
  offer: null,
  nearbyOffers: [],
};

export const roomSlice = createSlice({
  name: NameSpace.Room,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offerLoadingStatus = FetchStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.offerLoadingStatus = FetchStatus.Pending;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offerLoadingStatus = FetchStatus.Failed;
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.nearbyLoadingStatus = FetchStatus.Success;
      })
      .addCase(fetchNearby.pending, (state) => {
        state.nearbyLoadingStatus = FetchStatus.Pending;
      })
      .addCase(fetchNearby.rejected, (state) => {
        state.nearbyLoadingStatus = FetchStatus.Failed;
      })
      .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
        if (state.offer?.id === action.payload.id) {
          state.offer = action.payload;
        }

        state.nearbyOffers = state.nearbyOffers.map((offer) => {
          if (offer.id === action.payload.id) {
            return action.payload;
          }
          return offer;
        });
      })
      .addCase(logout.fulfilled, (state) => {
        if (state.offer) {
          state.offer.isFavorite = false;
        }

        if (state.nearbyOffers) {
          state.nearbyOffers = state.nearbyOffers.map((offer) => (
            {...offer, isFavorite: false}
          ));
        }
      });
  }
});
