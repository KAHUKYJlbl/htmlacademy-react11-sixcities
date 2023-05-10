import classNames from 'classnames';

import { Offer } from '../../types/offer/offer';

import Badge from '../badge/badge';
import FavoriteButton from '../favorite-button/favorite-button';
import NewCommentForm from '../new-comment-form/new-comment-form';
import StarRating from '../star-rating/star-rating';
import ReviewItem from '../review-item/review-item';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { getSortedComments } from '../../store/comments/selectors';
import { getAuthStatus } from '../../store/user/selectors';

type RoomInfoProps = {
  isPremium?: boolean;
  offer: Offer;
};

export default function RoomInfo ({isPremium = true, offer}: RoomInfoProps): JSX.Element {
  const comments = useAppSelector(getSortedComments);
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {isPremium && <Badge title='Premium' badgeClasses={['property__mark']} />}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {offer.title}
          </h1>
          <FavoriteButton isFavorite={offer.isFavorite} buttonType='room' offerId={offer.id} />
        </div>
        <StarRating rating={offer.rating} starRatingType='room' />
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {offer.type}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {`${offer.bedrooms} Bedrooms`}
          </li>
          <li className="property__feature property__feature--adults">
            Max {offer.maxAdults} adults
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">{`€${offer.price}`}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {offer.goods.map((good) => (
              <li className="property__inside-item" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className={classNames('user__avatar-wrapper property__avatar-wrapper', offer.host.isPro && 'property__avatar-wrapper--pro')}>
              <img
                className="property__avatar user__avatar"
                src={offer.host.avatarUrl}
                width="74" height="74"
                alt="Host avatar"
              />
            </div>
            <span className="property__user-name">
              {offer.host.name}
            </span>
            <span className="property__user-status">
              {offer.host.isPro ? 'Pro' : 'Amateur'}
            </span>
          </div>
          <div className="property__description">
            {offer.description.split('. ').map((sentence) => (
              <p className="property__text" key={sentence.slice(3, 6)}>
                {sentence}
              </p>
            ))}
          </div>
        </div>
        <section className="property__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
          <ul className="reviews__list">
            {comments.map((comment) => (
              <ReviewItem
                key={comment.id}
                comment={comment}
              />
            ))}
          </ul>
          {authStatus.auth && <NewCommentForm offerId={offer.id.toString()} />}
        </section>
      </div>
    </div>
  );
}
