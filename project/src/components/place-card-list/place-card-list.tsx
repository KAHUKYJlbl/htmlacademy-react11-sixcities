import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';

import { Offer } from '../../types/offer/offer';

type PlaceCardListProps = {
  offers: Offer[];
}

export default function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {
  const [active, setActive] = useState<null | number>(null);

  const handleMouseEnter = (id: number) => {
    setActive(id);
  };

  const handleMouseLeave = (id: number) => {
    if (active === id) {
      setActive(null);
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onCardMouseEnter={handleMouseEnter} onCardMouseLeave={handleMouseLeave} />)}
    </div>
  );
}
