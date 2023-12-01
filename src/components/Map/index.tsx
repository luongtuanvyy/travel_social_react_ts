import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { CurrencyVND } from '~/service/CurrentService';
import './index.css';
import osm from './osm-provider';
import { Tour } from '~/types/entity';

type MapLeafletProps = {
  tour: Tour;
};

const MapLeaflet = (prop: MapLeafletProps) => {
  const [center, setCenter] = useState({ lat: 10.619471, lng: 105.986586 });
  const ZOOM_LEVEL = 9;
  const { tour } = prop;

  const markerIcon = new L.DivIcon({
    className: 'icon-marker',
    html: '<div class="w-10 h-10 -translate-x-1/3 bg-secondary/50 rounded-full flex justify-center items-center"><div class="w-6 h-6 bg-white rounded-full"></div></div>',
  });

  return (
    <>
      <div className="">
        <MapContainer center={center} zoom={ZOOM_LEVEL}>
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />

          <Marker position={[10.619471, 105.986586]} icon={markerIcon}>
            <Popup className="">
              <div className="flex space-x-2">
                <img
                  className="rounded-lg h-20 w-20 min-w-[80px] object-cover mb-1"
                  src={tour.image}
                />
                <div className="flex flex-col justify-center">
                  <a
                    className="text-black"
                    style={{ color: 'black', fontWeight: 'bold' }}
                    href=""
                  >
                    {tour.name}
                  </a>
                  <p
                    className="flex items-center text-xs "
                    style={{ margin: '1px', color: 'gray' }}
                  >
                    {tour.tourTemplateId.name}
                  </p>
                  <p
                    className="flex space-x-1 items-center"
                    style={{ margin: '1px', color: 'gray' }}
                  >
                    {tour.size - tour.registered} người &#8226; 4.5 &#8226;{' '}
                    <span className="ml-1 text-red-700 font-bold">
                      {/* {CurrencyVND(tour.price)} VND */}
                    </span>
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default MapLeaflet;
