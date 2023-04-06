import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { MagnifyingGlass } from 'react-loader-spinner';

import Layout from '../../components/layout/layout';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CityMap from '../../components/city-map/city-map';

import { changeCurrentCity } from '../../store/actions/change-current-city';
import { CurrentSortCallback } from '../../utils/sort-offers';
import { SortType } from '../../const';
import { fetchOffers } from '../../store/api-actions/fetch-offers';

export default function Main(): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const currentSort = useAppSelector((state) => state.currentSort);
  const isLoading = useAppSelector((state) => state.isLoading);
  const dispatch = useAppDispatch();
  const [hoveredOfferId, setHoveredOfferId] = useState<number | null>(null);
  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  const handleLocationChange = (newLocation: string) => {
    dispatch(changeCurrentCity(newLocation));
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);

  const sortedOffers = (
    currentSort === SortType.Popular
      ? filteredOffers
      : filteredOffers.sort(CurrentSortCallback[currentSort])
  );

  if (isLoading) {
    return (
      <main className="page__main page__main--index">
        <MagnifyingGlass
          visible
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{margin: '100px auto 0'}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor = '#c0efff'
          color = '#007bff'
        />
      </main>
    );
  }

  return (
    <Layout isHeaderNav wrapperClasses={['page--gray', 'page--main']}>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations activeLocation={currentCity} onLocationChange={handleLocationChange} />
        <div className="cities">
          <div className="cities__places-container container">
            {
              filteredOffers.length
                ?
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
                :
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
                  </div>
                </section>
            }
            <div className="cities__right-section">
              {
                filteredOffers.length
                  ?
                  <CityMap
                    mapClasses={['cities__map']}
                    offers={filteredOffers}
                    hoveredOfferId={hoveredOfferId}
                  />
                  :
                  <section className="cities__map map"></section>
              }
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
