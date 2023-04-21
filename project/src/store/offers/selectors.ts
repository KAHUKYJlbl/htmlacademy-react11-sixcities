import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const isOffersLoading = (state: State): boolean => (
  state[NameSpace.Offers].offersLoadingStatus === FetchStatus.Idle
  || state[NameSpace.Offers].offersLoadingStatus === FetchStatus.Pending
);

export const isOffersLoadingFailed = (state: State): boolean => state[NameSpace.Offers].offersLoadingStatus === FetchStatus.Failed;

export const getOffersLoadingStatus = (state: State): FetchStatus => state[NameSpace.Offers].offersLoadingStatus;

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
