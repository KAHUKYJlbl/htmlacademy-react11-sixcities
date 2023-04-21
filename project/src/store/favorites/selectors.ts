import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offer/offer';
import { State } from '../../types/state/state';

export const getFavorites = (state: State): Offer[] => state[NameSpace.Favorites].favoriteOffers;

export const isFavoritesLoading = (state: State): boolean => (
  state[NameSpace.Favorites].favoritesLoadingStatus === FetchStatus.Idle
  || state[NameSpace.Favorites].favoritesLoadingStatus === FetchStatus.Pending
);

