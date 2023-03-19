import Layout from '../../components/layout/layout';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';


import { Offer } from '../../types/offer/offer';
import { Comment } from '../../types/offer/comment';

type MainProps = {
  offers: Offer[];
  comments: Comment[];
}

export default function Main({offers, comments}: MainProps): JSX.Element {
  return (
    <Layout isHeaderNav wrapperClasses={['page--gray', 'page--main']}>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations offers={offers} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <PlaceCardList
                offers={offers}
                placeCardType={'main'}
                placeCardContainerClasses={[
                  'cities__places-list',
                  'places__list',
                ]}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
