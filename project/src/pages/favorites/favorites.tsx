import { useEffect } from 'react';

import Layout from '../../components/layout/layout';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import PlaceCardListByCities from '../../components/place-card-list-by-cities/place-card-list-by-cities';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { getFavorites, getFavoritesLoadingStatus } from '../../store/favorites/selectors';
import { fetchFavorites } from '../../store/favorites/api-actions';
import { getOffersByCities } from '../../utils/offers-by-cities';
import Oops from '../../components/oops/oops';

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
  const favoritesLoadingStatus = useAppSelector(getFavoritesLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (favoritesLoadingStatus.isLoading) {
    return <LoadingSpinner spinnerType='page' />;
  }

  if (favoritesLoadingStatus.isFailed) {
    return <Oops type='favorites' />;
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
