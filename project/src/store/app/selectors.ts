import { Cities, FetchStatus, NameSpace, SortType } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const getCurrentCity = (state: State): Cities => state[NameSpace.App].currentCity;

export const getCurrentSort = (state: State): SortType => state[NameSpace.App].currentSort;

export const getOffersLoadingStatus = (state: State): FetchStatus => state[NameSpace.App].isOffersLoading;

export const getOffers = (state: State): Offer[] => state[NameSpace.App].offers;

