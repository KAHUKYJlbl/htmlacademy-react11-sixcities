import PlaceCardList from '../place-card-list/place-card-list';

import { FavoritesByCities } from '../../types/offer/offer';

type PlaceCardListByCitiesProps = {
  favoritesByCities: FavoritesByCities;
}

export default function PlaceCardListByCities({favoritesByCities}: PlaceCardListByCitiesProps): JSX.Element {
  const favoriteCities = [];
  for (const city in favoritesByCities) {
    favoriteCities.push(
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
    );
  }

  return (
    <ul className="favorites__list">
      {favoriteCities}
    </ul>
  );
}
