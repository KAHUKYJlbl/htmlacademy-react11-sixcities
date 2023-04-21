import Layout from '../../components/layout/layout';
import PlaceCardListByCities from '../../components/place-card-list-by-cities/place-card-list-by-cities';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { getFavorites, isFavoritesLoading } from '../../store/favorites/selectors';
import { getOffersByCities } from '../../utils/offers-by-cities';

function EmptyFavorites() {
  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
    </div>
  );
}

export default function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavorites);
  const isLoading = useAppSelector(isFavoritesLoading);

  if (isLoading) {
    return <LoadingSpinner spinnerType='page' />;
  }

  return (
    <Layout isFooter isHeaderNav>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {
              favoriteOffers.length > 0
                ? <PlaceCardListByCities favoritesByCities={getOffersByCities(favoriteOffers)} />
                : <EmptyFavorites />
            }
          </section>
        </div>
      </main>
    </Layout>
  );
}
