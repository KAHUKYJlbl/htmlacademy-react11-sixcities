import { useState } from 'react';
import { Offer } from '../../types/offer/offer';

import PlaceCardList from '../place-card-list/place-card-list';

type NearPlacesProps = {
  offers: Offer[];
}

export default function NearPlaces ({offers}: NearPlacesProps): JSX.Element {
  const [, setCurrentOfer] = useState<number | null>(null);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceCardList
        offers={offers.slice(-3)}
        onCurrentOfferChange = {setCurrentOfer}
        placeCardType={'nearby'}
        placeCardContainerClasses={[
          'near-places__list',
          'places__list',
        ]}
      />
    </section>
  );
}
