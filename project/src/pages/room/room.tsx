import { useParams } from 'react-router-dom';

import Gallery from '../../components/gallery/gallery';
import Layout from '../../components/layout/layout';
import RoomInfo from '../../components/room-info/room-info';
import NearPlaces from '../../components/near-places/near-places';
import CityMap from '../../components/city-map/city-map';

import { Offer } from '../../types/offer/offer';

type RoomProps = {
  offers: Offer[];
}

type MyParams = {
  id: string;
};

export default function Room({offers}: RoomProps): JSX.Element {
  const {id} = useParams() as MyParams;
  const offer = offers[+id - 1];

  return (
    <Layout isHeaderNav>
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery />
          <RoomInfo offer={offer} />
          <CityMap mapClasses={['property__map']} />
        </section>
        <div className="container">
          <NearPlaces offers={offers} />
        </div>
      </main>
    </Layout>
  );
}
