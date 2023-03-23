import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';

import { Offer } from '../../types/offer/offer';
import classNames from 'classnames';

type PlaceCardListProps = {
  offers: Offer[];
  placeCardType: 'favorites' | 'main' | 'nearby';
  placeCardContainerClasses: string[];
}

export default function PlaceCardList({
  offers,
  placeCardType,
  placeCardContainerClasses
}: PlaceCardListProps): JSX.Element {
  const [, setActiveId] = useState<null | number>(null);

  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  return (
    <div className={classNames(placeCardContainerClasses)}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          placeCardType={placeCardType}
          onCardMouseEnter={handleMouseEnter}
          onCardMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}
