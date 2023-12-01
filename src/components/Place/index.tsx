import { Address } from '~/assets/svg';
import { Place } from '~/types/entity';
import React from 'react';

const PlaceComponent = (props: { place: Place }) => {
  const { place } = props;

  return (
    <React.Fragment>
      {place && (
        <div className="relative group w-full h-full bg-blue-200 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover group/item"
            src={
              place.image
                ? place.image
                : 'https://i.pinimg.com/236x/a4/15/70/a415705b2003ddc3c3ef899aedbeff70.jpg'
            }
            alt=""
          />
          <div className="absolute bottom-0 group-hover:h-full transition-transform bg-gray-800/75 group-hover:bg-gray-900/75 h-fit w-full p-4 pt-5">
            <p className="font-medium text-white mb-1">{place.name}</p>
            <p className="text-gray-400 font-semibold text-sm mb-2 flex items-end">
              {place.address}
              <span className="text-blue-500">
                <Address />
              </span>
            </p>
            <div className="hidden">
              <p className="text-white font-medium text-sm mb-2">
                {place.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PlaceComponent;
