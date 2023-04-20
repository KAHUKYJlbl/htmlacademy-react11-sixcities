import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const isOffersLoading = (state: State): boolean => (
  state[NameSpace.Offers].isOffersLoading === FetchStatus.Idle
  || state[NameSpace.Offers].isOffersLoading === FetchStatus.Pending
);

export const isOffersLoadingFailed = (state: State): boolean => state[NameSpace.Offers].isOffersLoading === FetchStatus.Failed;

export const getOffersLoadingStatus = (state: State): FetchStatus => state[NameSpace.Offers].isOffersLoading;

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
