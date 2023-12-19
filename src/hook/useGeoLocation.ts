import React, { useEffect } from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = React.useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const onScuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: any) => {
    setLocation({
      loaded: true,
      coordinates: { lat: '', lng: '' },
    });
    console.log(error);
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({ code: 0, message: 'Geolocation not supported' });
    }
    navigator.geolocation.getCurrentPosition(onScuccess, onError);
  }, []);
};

export default useGeoLocation;
