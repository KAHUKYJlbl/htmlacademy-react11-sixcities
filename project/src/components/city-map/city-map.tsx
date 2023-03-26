import classNames from 'classnames';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useRef } from 'react';
import { Offer } from '../../types/offer/offer';
import useMap from '../../hooks/use-map/use-map';

type CityMapProps = {
  mapClasses: string[];
  offers: Offer[];
  currentOffer: number | null;
}

export default function CityMap ({mapClasses, offers, currentOffer}: CityMapProps): JSX.Element {
  const mapRef = useRef(null);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  const map = useMap(mapRef, offers[0].location);
  const markers = leaflet.layerGroup([]);

  useEffect(() => {
    if (map) {
      map.setView(
        {
          lat: offers[0].city.location.latitude,
          lng: offers[0].city.location.longitude,
        },
        offers[0].city.location.zoom,
      );

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon:
              offer.id === currentOffer
                ? currentCustomIcon
                : defaultCustomIcon,
          })
          .addTo(markers);
      });
      markers.addTo(map);

      return () => {
        map.removeLayer(markers);
      };
    }
  }, [map, offers]);

  return (
    <section className={classNames('map', mapClasses)} ref={mapRef}>
    </section>
  );
}
