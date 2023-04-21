import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const isOfferLoading = (state: State): boolean => (
  state[NameSpace.Room].offerLoadingStatus === FetchStatus.Idle
  || state[NameSpace.Room].offerLoadingStatus === FetchStatus.Pending
);

export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Room].nearbyOffers;

export const getOffer = (state: State): Offer | null => state[NameSpace.Room].offer;
