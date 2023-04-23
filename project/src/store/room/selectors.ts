import { createSelector } from '@reduxjs/toolkit';

import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Room].nearbyOffers;

export const getOffer = (state: State): Offer | null => state[NameSpace.Room].offer;

export const getOfferLoadingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Room].offerLoadingStatus,
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  })
);

export const getNearbyLoadingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Room].nearbyLoadingStatus,
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  })
);
