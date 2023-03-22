import { Link, generatePath } from 'react-router-dom';
import classNames from 'classnames';

import Badge from '../badge/badge';
import FavoriteButton from '../favorite-button/favorite-button';
import StarRating from '../star-rating/star-rating';

import { Offer } from '../../types/offer/offer';
import { capitalize } from '../../utils/capitalize';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offer: Offer;
  placeCardType: 'favorites' | 'main' | 'nearby';
  onCardMouseEnter: (arg: number) => void;
  onCardMouseLeave: () => void;
}

const placeCardTypes = {
  favorites: {
    placeCardClasses: ['place-card', 'favorites__card'],
    cardInfoClasses: ['place-card__info', 'favorites__card-info'],
    imageWrapperClasses: ['place-card__image-wrapper', 'favorites__image-wrapper'],
  },
  main: {
    placeCardClasses: ['place-card', 'cities__card'],
    cardInfoClasses: ['place-card__info'],
    imageWrapperClasses: ['place-card__image-wrapper', 'cities__image-wrapper'],
  },
  nearby: {
    placeCardClasses: ['place-card', 'near-places__card'],
    cardInfoClasses: ['place-card__info'],
    imageWrapperClasses: ['place-card__image-wrapper', 'near-places__image-wrapper'],
  },
};

export default function PlaceCard({
  offer,
  placeCardType,
  onCardMouseEnter,
  onCardMouseLeave
}: PlaceCardProps): JSX.Element {
  const placeCardClasses = classNames(placeCardTypes[placeCardType].placeCardClasses);
  const imageWrapperClasses = classNames(placeCardTypes[placeCardType].imageWrapperClasses);
  const cardInfoClasses = classNames(placeCardTypes[placeCardType].cardInfoClasses);

  return (
    <article
      className={placeCardClasses}
      onMouseEnter={() => onCardMouseEnter(offer.id)}
      onMouseLeave={() => onCardMouseLeave()}
    >
      {offer.isPremium && <Badge title='Premium' badgeClasses={['place-card__mark']} />}
      <div className={imageWrapperClasses}>
        <Link to={generatePath(AppRoute.Room, { id: offer.id.toString() })}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={cardInfoClasses}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            isFavorite={offer.isFavorite}
            buttonType='card'
          />
        </div>
        <StarRating rating={offer.rating} starRatingType='card' />
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, { id: offer.id.toString() })}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(offer.type)}</p>
      </div>
    </article>
  );
}
