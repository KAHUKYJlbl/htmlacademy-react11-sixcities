import Layout from '../../components/layout/layout';
import PlaceCardList from '../../components/place-card-list/place-card-list';

import { Offer } from '../../types/offer/offer';

type FavoritesByCitiesProps = {
  favoritesByCities: FavoritesByCities;
}

function FavoriteCities({favoritesByCities}: FavoritesByCitiesProps): JSX.Element {
  const favoriteCities = [];
  for (const city in favoritesByCities) {
    favoriteCities.push(
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {/* TODO заменить классы на favorite */}
          <PlaceCardList offers={favoritesByCities[city]} />
        </div>
      </li>
    );
  }

  return (
    <ul className="favorites__list">
      {favoriteCities}
    </ul>
  );
}

type FavoritesProps = {
  favorites: Offer[];
}

type FavoritesByCities = {
  [city: string]: Offer[];
  // [Cologne: string]: Offer[];
  // [Brussels: string]: Offer[];
  // [Amsterdam: string]: Offer[];
  // [Hamburg: string]: Offer[];
  // [Dusseldorf: string]: Offer[];
}

export default function Favorites({favorites}: FavoritesProps): JSX.Element {
  const favoritesByCities: FavoritesByCities = {};
  favorites.forEach((offer) => {
    favoritesByCities[offer.city.name]
      ? favoritesByCities[offer.city.name]?.push(offer)
      : favoritesByCities[offer.city.name] = [offer];
  });

  return (
    <Layout isFooter isHeaderNav>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCities favoritesByCities={favoritesByCities} />
          </section>
        </div>
      </main>
    </Layout>
  );
}
