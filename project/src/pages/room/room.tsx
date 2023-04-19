import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';

import Gallery from '../../components/gallery/gallery';
import Layout from '../../components/layout/layout';
import RoomInfo from '../../components/room-info/room-info';
import NearPlaces from '../../components/near-places/near-places';
import CityMap from '../../components/city-map/city-map';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

import { AppRoute, FetchStatus } from '../../const';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { fetchComments, fetchNearby, fetchOffer } from '../../store/room/api-actions';
import { getNearbyOffers, getOffer, getOfferLoadingStatus } from '../../store/room/selectors';
import Oops from '../oops/oops';

export default function Room(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isOfferLoading = useAppSelector(getOfferLoadingStatus);
  const currentOffer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchNearby(id));
  }, [dispatch, id]);

  if (currentOffer === null && isOfferLoading === FetchStatus.Success) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if (isOfferLoading === FetchStatus.Idle || isOfferLoading === FetchStatus.Pending) {
    return <LoadingSpinner spinnerType='page' />;
  }

  if (isOfferLoading === FetchStatus.Failed) {
    return <Oops id={id} />;
  }

  return (
    <Layout isHeaderNav>
      <main className="page__main page__main--property">
        <section className="property">
          { currentOffer && <Gallery offer={currentOffer} /> }
          { currentOffer && <RoomInfo offer={currentOffer} /> }
          { currentOffer && <CityMap mapClasses={['property__map']} offers={[currentOffer, ...nearbyOffers]} hoveredOfferId={currentOffer.id} /> }
        </section>
        <div className="container">
          <NearPlaces offers={nearbyOffers} />
        </div>
      </main>
    </Layout>
  );
}
