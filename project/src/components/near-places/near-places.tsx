import { Offer } from '../../types/offer/offer';

import PlaceCardList from '../place-card-list/place-card-list';

type NearPlacesProps = {
  offers: Offer[];
}

export default function NearPlaces ({offers}: NearPlacesProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceCardList
        offers={offers}
        placeCardType={'nearby'}
        placeCardContainerClasses={[
          'near-places__list',
          'places__list',
        ]}
      />
    </section>
  );
}
