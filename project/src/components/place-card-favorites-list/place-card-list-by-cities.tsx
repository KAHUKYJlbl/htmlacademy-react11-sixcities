import PlaceCardList from '../place-card-list/place-card-list';

import { FavoritesByCities } from '../../types/offer/offer';

type PlaceCardListByCitiesProps = {
  favoritesByCities: FavoritesByCities;
}

export default function PlaceCardListByCities({favoritesByCities}: PlaceCardListByCitiesProps): JSX.Element {
  const favoriteCities = Object.keys(favoritesByCities);

  return (
    <ul className="favorites__list">
      {favoriteCities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <PlaceCardList
            offers={favoritesByCities[city]}
            placeCardType={'favorites'}
            placeCardContainerClasses={['favorites__places']}
          />
        </li>
      ))}
    </ul>
  );
}
