import { createSelector } from '@reduxjs/toolkit';

import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;

export const getOffersLoadingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Offers].offersLoadingStatus,
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  })
);
