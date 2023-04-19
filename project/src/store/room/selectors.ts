import { FetchStatus, NameSpace } from '../../const';
import { Comment } from '../../types/offer/comment';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const getComments = (state: State): Comment[] => state[NameSpace.Room].comments;

export const getOfferLoadingStatus = (state: State): FetchStatus => state[NameSpace.Room].isOfferLoading;

export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Room].nearbyOffers;

export const getOffer = (state: State): Offer | null => state[NameSpace.Room].offer;
