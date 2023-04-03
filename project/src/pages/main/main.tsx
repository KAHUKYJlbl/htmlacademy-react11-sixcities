import { useState } from 'react';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';

import Layout from '../../components/layout/layout';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CityMap from '../../components/city-map/city-map';

import { changeCurrentCity } from '../../store/actions/change-current-city';
import { CurrentSortCallback } from '../../utils/sort-offers';
import { SortType } from '../../const';

export default function Main(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const currentSort = useAppSelector((state) => state.currentSort);

  const [hoveredOfferId, setHoveredOfferId] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const handleLocationChange = (newLocation: string) => {
    dispatch(changeCurrentCity(newLocation));
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);

  const sortedOffers = (
    currentSort === SortType.Popular
      ? filteredOffers
      : filteredOffers.sort(CurrentSortCallback[currentSort])
  );

  return (
    <Layout isHeaderNav wrapperClasses={['page--gray', 'page--main']}>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations activeLocation={currentCity} onLocationChange={handleLocationChange} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <Sort />
              <PlaceCardList
                offers={sortedOffers}
                onHoveredOfferChange={setHoveredOfferId}
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
                offers={filteredOffers}
                hoveredOfferId={hoveredOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
