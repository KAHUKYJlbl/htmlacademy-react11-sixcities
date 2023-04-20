import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { fetchNearby, fetchOffer } from './api-actions';
import { Offer } from '../../types/offer/offer';
import { Comment } from '../../types/offer/comment';

type InitialState = {
  isOfferLoading: FetchStatus;
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: Comment[];
}

const initialState: InitialState = {
  isOfferLoading: FetchStatus.Idle,
  offer: null,
  nearbyOffers: [],
  comments: [],
};

export const roomSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.isOfferLoading = FetchStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = FetchStatus.Pending;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferLoading = FetchStatus.Failed;
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});
