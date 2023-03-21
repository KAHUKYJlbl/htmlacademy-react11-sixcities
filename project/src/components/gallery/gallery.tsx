const MAX_PHOTO_COUNT = 6;

export default function Gallery (): JSX.Element {
  const list = [];
  for (let i = 0; i < MAX_PHOTO_COUNT; i++) {
    list.push(
      <div key={i} className="property__image-wrapper">
        <img className="property__image" src="img/room.jpg" alt="Photo studio" />
      </div>
    );
  }

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {list}
      </div>
    </div>
  );
}
