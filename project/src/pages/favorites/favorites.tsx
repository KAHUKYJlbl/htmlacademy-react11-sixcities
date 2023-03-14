// import PlaceCard from '../../components/place-card/place-card';
import Layout from '../../components/layout/layout';
// import { getOfferById } from '../../mocks/offers';

export default function Favorites(): JSX.Element {
  return (
    <Layout isFooter isHeaderNav>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {/* TODO заменить классы на favorite */}
                  {/* <PlaceCard offer={getOfferRandom()} />
                  <PlaceCard offer={getOfferRandom()} /> */}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {/* TODO заменить классы на favorite */}
                  {/* <PlaceCard offer={getOfferRandom()} /> */}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
