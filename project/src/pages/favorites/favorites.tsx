import Layout from '../../components/layout/layout';
import PlaceCardListByCities from '../../components/place-card-favorites-list/place-card-list-by-cities';

import { Offer, FavoritesByCities } from '../../types/offer/offer';

type FavoritesProps = {
  favorites: Offer[];
}

const sortOffersByCities = (favorites: Offer[]) => (
  favorites.reduce<FavoritesByCities>((acc, current) => {
    if (acc[current.city.name]) {
      acc[current.city.name]?.push(current);
    } else {
      acc[current.city.name] = [current];
    }
    return acc;
  }, {})
);


export default function Favorites({favorites}: FavoritesProps): JSX.Element {
  return (
    <Layout isFooter isHeaderNav>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <PlaceCardListByCities favoritesByCities={sortOffersByCities(favorites)} />
          </section>
        </div>
      </main>
    </Layout>
  );
}
