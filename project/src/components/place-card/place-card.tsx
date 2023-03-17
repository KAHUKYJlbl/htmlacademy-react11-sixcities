import { Link, generatePath } from 'react-router-dom';

import Badge from '../badge/badge';

import { Offer } from '../../types/offer/offer';

import { ratingToStars } from '../../utils/rating-to-stars';
import { capitalize } from '../../utils/capitalize';
import { AppRoute } from '../../const';
import classNames from 'classnames';

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
      {offer.isPremium && <Badge str={'Premium'} />}
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
          <button
            className={classNames(
              'button',
              'place-card__bookmark-button',
              offer.isFavorite && 'place-card__bookmark-button--active'
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingToStars(offer.rating, 5, 5)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
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
