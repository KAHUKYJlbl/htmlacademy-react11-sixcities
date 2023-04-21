import PlaceCard from '../../components/place-card/place-card';

import { Offer } from '../../types/offer/offer';
import classNames from 'classnames';

type PlaceCardListProps = {
  offers: Offer[];
  onHoveredOfferChange?: (arg: number | null) => void;
  placeCardType: 'favorites' | 'main' | 'nearby';
  placeCardContainerClasses: string[];
}

export default function PlaceCardList({
  offers,
  onHoveredOfferChange,
  placeCardType,
  placeCardContainerClasses
}: PlaceCardListProps): JSX.Element {

  const handleMouseEnter = (id: number) => {
    onHoveredOfferChange?.(id);
  };

  const handleMouseLeave = () => {
    onHoveredOfferChange?.(null);
  };

  return (
    <div className={classNames(placeCardContainerClasses)}>
      {offers?.map((offer) => (
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
