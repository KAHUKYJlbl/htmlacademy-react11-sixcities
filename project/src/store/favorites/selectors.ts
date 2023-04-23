import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const getFavorites = (state: State): Offer[] => state[NameSpace.Favorites].favoriteOffers;

export const getFavoritesLoadingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Favorites].favoritesLoadingStatus,
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  })
);

export const getFavoritesPostingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Favorites].favoritesPostingStatus,
  (status) => ({
    isLoading: status === FetchStatus.Pending,
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  })
);
