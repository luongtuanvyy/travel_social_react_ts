import React, { useEffect } from 'react';
import L from 'leaflet';

const index = () => {
  useEffect(() => {
    L.Control.Geocoder({
      defaultMarkGeocode: false,
    })
      .on('markgeocode', function (e) {
        var bbox = e.geocode.bbox;
        var poly = L.polygon([
          bbox.getSouthEast(),
          bbox.getNorthEast(),
          bbox.getNorthWest(),
          bbox.getSouthWest(),
        ]).addTo(map);
        map.fitBounds(poly.getBounds());
      })
      .addTo(map);
  });
  return <div>index</div>;
};

export default index;
