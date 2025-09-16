import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "310px"
};

const center = {
  lat: 28.4965352527687, // replace with your latitude
  lng: 77.16045185894953  // replace with your longitude
};

export default function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDSPdEeCFwq2SOvU3gtmad31bEfbTKtjko">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
