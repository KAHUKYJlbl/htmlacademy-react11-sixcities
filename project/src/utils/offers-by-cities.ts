import { FavoritesByCities, Offer } from '../types/offer/offer';

export const getOffersByCities = (favorites: Offer[]) => (
  favorites.reduce<FavoritesByCities>((acc, current) => {
    if (acc[current.city.name]) {
      acc[current.city.name].push(current);
    } else {
      acc[current.city.name] = [current];
    }
    return acc;
  }, {})
);
