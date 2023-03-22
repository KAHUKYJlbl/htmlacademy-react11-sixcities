import { Offer } from '../../types/offer/offer';

const MAX_PHOTO_COUNT = 6;

type GalleryProps = {
  offer: Offer;
}

export default function Gallery ({offer}: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.slice(0, MAX_PHOTO_COUNT).map((photo) => (
          <div key={photo} className="property__image-wrapper">
            <img className="property__image" src={photo} alt={`Photo ${offer.type}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
