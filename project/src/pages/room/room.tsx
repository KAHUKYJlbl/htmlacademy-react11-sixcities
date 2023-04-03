import { Navigate, useParams } from 'react-router-dom';

import Gallery from '../../components/gallery/gallery';
import Layout from '../../components/layout/layout';
import RoomInfo from '../../components/room-info/room-info';
import NearPlaces from '../../components/near-places/near-places';
import CityMap from '../../components/city-map/city-map';

import { Offer } from '../../types/offer/offer';
import { AppRoute } from '../../const';

type RoomProps = {
  offers: Offer[];
}

export default function Room({offers}: RoomProps): JSX.Element {
  const {id} = useParams();

  // if (id === undefined) {
  //   return <Navigate to={AppRoute.NotFound} />;
  // }

  const currentOffer = offers.find((offer) => id && offer.id === +id);

  if (currentOffer === undefined) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <Layout isHeaderNav>
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery offer={currentOffer} />
          <RoomInfo offer={currentOffer} />
          <CityMap mapClasses={['property__map']} offers={[currentOffer, ...offers]} hoveredOfferId={currentOffer.id} />
        </section>
        <div className="container">
          <NearPlaces offers={offers} />
        </div>
      </main>
    </Layout>
  );
}
