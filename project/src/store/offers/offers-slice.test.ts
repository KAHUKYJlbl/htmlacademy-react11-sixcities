import { FetchStatus } from '../../const';
import { offerToAdd, offerToRemove } from '../../mock/favorites';
import { offers, totallyUnfavoritedOffers, unfavoritedOffers } from '../../mock/offers';
import { toggleFavoriteStatus } from '../favorites/api-actions';
import { logout } from '../user/api-actions';
import { fetchOffers } from './api-actions';
import { offersSlice } from './offers-slice';

describe('Reducer: offersSlice', () => {
  it('without additional parameters should return initial state', () => {
    const state = {offersLoadingStatus: FetchStatus.Idle, offers: []};
    expect(offersSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offersLoadingStatus: FetchStatus.Idle, offers: []});
  });

  it('should update offers by load offers and set FetchStatus.Success to offersLoadingStatus', () => {
    const state = {offersLoadingStatus: FetchStatus.Idle, offers: []};
    expect(offersSlice.reducer(state, {type: fetchOffers.fulfilled.type, payload: offers}))
      .toEqual({offersLoadingStatus: FetchStatus.Success, offers});
  });

  it('should set FetchStatus.Pending to offersLoadingStatus while offers are loading', () => {
    const state = {offersLoadingStatus: FetchStatus.Idle, offers: []};
    expect(offersSlice.reducer(state, {type: fetchOffers.pending.type}))
      .toEqual({offersLoadingStatus: FetchStatus.Pending, offers: []});
  });

  it('should set FetchStatus.Failed to offersLoadingStatus if server is unavailable', () => {
    const state = {offersLoadingStatus: FetchStatus.Idle, offers: []};
    expect(offersSlice.reducer(state, {type: fetchOffers.rejected.type}))
      .toEqual({offersLoadingStatus: FetchStatus.Failed, offers: []});
  });

  it('should update offers by load offer (favorite)', () => {
    const state = {offersLoadingStatus: FetchStatus.Idle, offers: unfavoritedOffers};
    expect(offersSlice.reducer(state, {type: toggleFavoriteStatus.fulfilled.type, payload: offerToAdd}))
      .toEqual({offersLoadingStatus: FetchStatus.Idle, offers});
  });

  it('should update offers by load offer (unfavorite)', () => {
    const state = {offersLoadingStatus: FetchStatus.Idle, offers};
    expect(offersSlice.reducer(state, {type: toggleFavoriteStatus.fulfilled.type, payload: offerToRemove}))
      .toEqual({offersLoadingStatus: FetchStatus.Idle, offers: unfavoritedOffers});
  });

  it('should set isFavorite: false to all offers', () => {
    const state = {offersLoadingStatus: FetchStatus.Idle, offers};
    expect(offersSlice.reducer(state, {type: logout.fulfilled.type}))
      .toEqual({offersLoadingStatus: FetchStatus.Idle, offers: totallyUnfavoritedOffers});
  });
});
