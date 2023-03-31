import Layout from '../../components/layout/layout';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CityMap from '../../components/city-map/city-map';

import { Offer } from '../../types/offer/offer';
import { Comment } from '../../types/offer/comment';

import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';

import { useState } from 'react';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { setCurrentCity } from '../../store/actions/set-current-city';

type MainProps = {
  offers: Offer[];
  comments: Comment[];
}

export default function Main({offers, comments}: MainProps): JSX.Element {
  // const [currentCity, setCurrentCity] = useState(CITIES[0]);
  const currentCity = useAppSelector((state) => state.currentCity);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);

  const dispatch = useAppDispatch();
  const handleLocationChange = (newLocation: string) => {
    dispatch(setCurrentCity(newLocation));
  };

  const [currentOfferId, setCurrentOfferId] = useState<number | null>(null);

  return (
    <Layout isHeaderNav wrapperClasses={['page--gray', 'page--main']}>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations activeLocation={currentCity} onLocationChange={handleLocationChange} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <Sort />
              <PlaceCardList
                offers={currentOffers}
                onCurrentOfferChange = {setCurrentOfferId}
                placeCardType={'main'}
                placeCardContainerClasses={[
                  'cities__places-list',
                  'places__list',
                ]}
              />
            </section>
            <div className="cities__right-section">
              <CityMap
                mapClasses={['cities__map']}
                offers={currentOffers}
                currentOfferId={currentOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
