import classNames from 'classnames';
import leaflet, { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useRef, useState } from 'react';
import { Offer } from '../../types/offer/offer';

type CityMapProps = {
  mapClasses: string[];
  offers: Offer[];
}

export default function CityMap ({mapClasses, offers}: CityMapProps): JSX.Element {
  const mapRef = useRef(null);

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: '/public/img/pin-active.svg',
  //   iconSize: [27, 39],
  //   iconAnchor: [14, 39],
  // });

  const markers = leaflet.layerGroup([]);

  const clearMap = () => {
    if (map) {
      map.removeLayer(markers);
    }
  };

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(markers);
      });
      markers.addTo(map);

      return clearMap;
    }
  }, [defaultCustomIcon, map, markers, offers]);

  useEffect(() => {
    if (map) {
      map.setView(
        {
          lat: offers[0].city.location.latitude,
          lng: offers[0].city.location.longitude,
        },
        offers[0].city.location.zoom,
      );
    }
  }, [map, offers]);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: offers[0].location.latitude,
          lng: offers[0].location.longitude,
        },
        zoom: offers[0].location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offers]);

  return (
    <section className={classNames('map', mapClasses)} ref={mapRef}>
    </section>
  );
}
