import { FetchStatus } from '../../const';
import { offerToAdd, offerToRemove } from '../../mock/favorites';
import { offers, totallyUnfavoritedOffers } from '../../mock/offers';
import { toggleFavoriteStatus } from '../favorites/api-actions';
import { logout } from '../user/api-actions';
import { fetchNearby, fetchOffer } from './api-actions';
import { roomSlice } from './room-slice';

describe('Reducer: roomSlice', () => {
  it('without additional parameters should return initial state', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Idle,
      nearbyLoadingStatus: FetchStatus.Idle,
      offer: null,
      nearbyOffers: []
    };
    expect(roomSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Idle,
        nearbyLoadingStatus: FetchStatus.Idle,
        offer: null,
        nearbyOffers: []
      });
  });

  it('should update offer by load offer and set FetchStatus.Success to offerLoadingStatus', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Idle,
      nearbyLoadingStatus: FetchStatus.Idle,
      offer: null,
      nearbyOffers: []
    };
    expect(roomSlice.reducer(state, {type: fetchOffer.fulfilled.type, payload: offers[0]}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Success,
        nearbyLoadingStatus: FetchStatus.Idle,
        offer: offers[0],
        nearbyOffers: []
      });
  });

  it('should set FetchStatus.Pending to offerLoadingStatus while offer is loading', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Idle,
      nearbyLoadingStatus: FetchStatus.Idle,
      offer: null,
      nearbyOffers: []
    };
    expect(roomSlice.reducer(state, {type: fetchOffer.pending.type}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Pending,
        nearbyLoadingStatus: FetchStatus.Idle,
        offer: null,
        nearbyOffers: []
      });
  });

  it('should set FetchStatus.Failed to offerLoadingStatus if server is unavailable', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Idle,
      nearbyLoadingStatus: FetchStatus.Idle,
      offer: null,
      nearbyOffers: []
    };
    expect(roomSlice.reducer(state, {type: fetchOffer.rejected.type}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Failed,
        nearbyLoadingStatus: FetchStatus.Idle,
        offer: null,
        nearbyOffers: []
      });
  });

  it('should update nearbyOffers by load offers and set FetchStatus.Success to nearbyLoadingStatus', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Idle,
      nearbyLoadingStatus: FetchStatus.Idle,
      offer: offers[0],
      nearbyOffers: []
    };
    expect(roomSlice.reducer(state, {type: fetchNearby.fulfilled.type, payload: offers.slice(1, 4)}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Idle,
        nearbyLoadingStatus: FetchStatus.Success,
        offer: offers[0],
        nearbyOffers: offers.slice(1, 4)
      });
  });

  it('should set FetchStatus.Pending to nearbyLoadingStatus while nearby offers are loading', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Idle,
      nearbyLoadingStatus: FetchStatus.Idle,
      offer: null,
      nearbyOffers: []
    };
    expect(roomSlice.reducer(state, {type: fetchNearby.pending.type}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Idle,
        nearbyLoadingStatus: FetchStatus.Pending,
        offer: null,
        nearbyOffers: []
      });
  });

  it('should set FetchStatus.Failed to nearbyLoadingStatus if server is unavailable', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Idle,
      nearbyLoadingStatus: FetchStatus.Idle,
      offer: null,
      nearbyOffers: []
    };
    expect(roomSlice.reducer(state, {type: fetchNearby.rejected.type}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Idle,
        nearbyLoadingStatus: FetchStatus.Failed,
        offer: null,
        nearbyOffers: []
      });
  });

  it('should update offer and nearbyOffers by load offer', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Success,
      nearbyLoadingStatus: FetchStatus.Success,
      offer: offerToAdd,
      nearbyOffers: offers.slice(4)
    };
    expect(roomSlice.reducer(state, {type: toggleFavoriteStatus.fulfilled.type, payload: offerToRemove}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Success,
        nearbyLoadingStatus: FetchStatus.Success,
        offer: offerToRemove,
        nearbyOffers: [...offers.slice(4, 6), offerToRemove]
      });
  });

  it('should set isFavorite: false to offer and all nearbyOffers', () => {
    const state = {
      offerLoadingStatus: FetchStatus.Success,
      nearbyLoadingStatus: FetchStatus.Success,
      offer: offerToAdd,
      nearbyOffers: offers.slice(4)
    };
    expect(roomSlice.reducer(state, {type: logout.fulfilled.type}))
      .toEqual({
        offerLoadingStatus: FetchStatus.Success,
        nearbyLoadingStatus: FetchStatus.Success,
        offer: offerToRemove,
        nearbyOffers: totallyUnfavoritedOffers.slice(4)
      });
  });
});
