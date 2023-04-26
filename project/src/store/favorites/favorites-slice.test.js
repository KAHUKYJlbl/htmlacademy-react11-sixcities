import { FetchStatus } from '../../const';
import { favotitesSlice } from './favorites-slice';
import { fetchFavorites, toggleFavoriteStatus } from './api-actions';
import { offers } from '../../mock/offers';
import { favoritesToAdd, favoritesToRemove, offerToAdd, offerToRemove } from '../../mock/favorites';


describe('Reducer: favoritesSlice', () => {
  it('without additional parameters should return initial state', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Idle, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: []};
    expect(favotitesSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Idle, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: []});
  });

  it('should update favoriteOffers by load favorites and set FetchStatus.Success to favoritesLoadingStatus', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Idle, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: []};
    expect(favotitesSlice.reducer(state, {type: fetchFavorites.fulfilled.type, payload: offers}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: offers});
  });

  it('should set FetchStatus.Pending to favoritesLoadingStatus while favorites are loading', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: []};
    expect(favotitesSlice.reducer(state, {type: fetchFavorites.pending.type}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Pending, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: []});
  });

  it('should set FetchStatus.Failed to favoritesLoadingStatus if server is unavailable', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: []};
    expect(favotitesSlice.reducer(state, {type: fetchFavorites.rejected.type}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Failed, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: []});
  });

  it('should add loaded offer to favoriteOffers and set FetchStatus.Success to favoritesPostingStatus', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: favoritesToAdd};
    expect(favotitesSlice.reducer(state, {type: toggleFavoriteStatus.fulfilled.type, payload: offerToAdd}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Success, favoriteOffers: favoritesToRemove});
  });

  it('should remove loaded offer from favoriteOffers and set FetchStatus.Success to favoritesPostingStatus', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: favoritesToRemove};
    expect(favotitesSlice.reducer(state, {type: toggleFavoriteStatus.fulfilled.type, payload: offerToRemove}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Success, favoriteOffers: favoritesToAdd});
  });

  it('should set FetchStatus.Pending to favoritesPostingStatus while favorite offer is posting', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: offers};
    expect(favotitesSlice.reducer(state, {type: toggleFavoriteStatus.pending.type}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Pending, favoriteOffers: offers});
  });

  it('should set FetchStatus.Failed to favoritesPostingStatus if server is unavailable', () => {
    const state = {favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Idle, favoriteOffers: offers};
    expect(favotitesSlice.reducer(state, {type: toggleFavoriteStatus.rejected.type}))
      .toEqual({favoritesLoadingStatus: FetchStatus.Success, favoritesPostingStatus: FetchStatus.Failed, favoriteOffers: offers});
  });
});
