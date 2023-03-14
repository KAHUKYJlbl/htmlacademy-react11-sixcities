import PlaceCard from '../../components/place-card/place-card';

import { Offer } from '../../types/offer/offer';

type PlaceCardListProps = {
  offers: Offer[];
}

export default function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
    </div>
  );
}
