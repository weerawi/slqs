import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const Map = () => {
  const [selected, setSelected] = useState(null);

  const onSelect = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelected({ lat, lng });
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        onClick={onSelect}
      >
        {selected && (
          <Marker
            position={{ lat: selected.lat, lng: selected.lng }}
            onClick={() => setSelected(null)}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
