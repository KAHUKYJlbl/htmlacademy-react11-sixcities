import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import classNames from 'classnames';

import Layout from '../../components/layout/layout';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CityMap from '../../components/city-map/city-map';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import Oops from '../oops/oops';

import { CurrentSortCallback } from '../../utils/sort-offers';
import { Cities, FetchStatus, SortType } from '../../const';
import { getCurrentCity, getCurrentSort, getOffers, getOffersLoadingStatus } from '../../store/app/selectors';
import { changeCurrentCity } from '../../store/app/actions';
import { fetchOffers } from '../../store/app/api-actions';

export default function Main(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const currentSort = useAppSelector(getCurrentSort);
  const isOffersLoading = useAppSelector(getOffersLoadingStatus);
  const dispatch = useAppDispatch();
  const [hoveredOfferId, setHoveredOfferId] = useState<number | null>(null);
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const handleLocationChange = (newLocation: Cities) => {
    dispatch(changeCurrentCity(newLocation));
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);

  const sortedOffers = (
    currentSort === SortType.Popular
      ? filteredOffers
      : filteredOffers.sort(CurrentSortCallback[currentSort])
  );

  function OffersEmpty(): JSX.Element {
    return(
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    );
  }

  if (isOffersLoading === FetchStatus.Idle || isOffersLoading === FetchStatus.Pending) {
    return <LoadingSpinner spinnerType='page' />;
  }

  if (isOffersLoading === FetchStatus.Failed) {
    return <Oops />;
  }

  return (
    <Layout isHeaderNav wrapperClasses={['page--gray', 'page--main']}>
      <main className={classNames('page__main page__main--index', !filteredOffers.length && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <Locations activeLocation={currentCity} onLocationChange={handleLocationChange} />
        <div className="cities">
          {
            !filteredOffers.length
              ? <OffersEmpty />
              : (
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
              )
          }
        </div>
      </main>
    </Layout>
  );
}
