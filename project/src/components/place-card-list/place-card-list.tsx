import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';

import { Offer } from '../../types/offer/offer';

type PlaceCardListProps = {
  offers: Offer[];
}

export default function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {
  const [, setActiveId] = useState<null | number>(null);

  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  return (
    <div className="cities__places-list places__list">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onCardMouseEnter={handleMouseEnter}
          onCardMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}
