import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const getOffersLoadingStatus = (state: State): FetchStatus => state[NameSpace.Offers].isOffersLoading;

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
