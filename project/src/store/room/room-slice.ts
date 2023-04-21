import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { fetchNearby, fetchOffer } from './api-actions';
import { Offer } from '../../types/offer/offer';
import { Comment } from '../../types/offer/comment';
import { toggleFavoriteStatus } from '../favorites/api-actions';

type InitialState = {
  offerLoadingStatus: FetchStatus;
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: Comment[];
}

const initialState: InitialState = {
  offerLoadingStatus: FetchStatus.Idle,
  offer: null,
  nearbyOffers: [],
  comments: [],
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

        state.offerLoadingStatus = FetchStatus.Success;
      });
  }
});
