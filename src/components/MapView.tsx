import React from "react";
import { useState } from "react";
import { useAuth } from "react-oidc-context";
import "./MapView.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { LatLng } from 'leaflet';
import DraggableMarker from "./DraggableMarker";

type AuthContext = ReturnType<typeof useAuth>;

interface AuthenticatedViewProps {
  auth: AuthContext;
}

function LocationMarker() {

    
    const [position, setPosition] = useState<LatLng | null>(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }


const MapView: React.FC<AuthenticatedViewProps> = ({auth}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MapContainer
        center={{ lat: 34.0522, lng: -118.2437, }}
        zoom={13}
        style={{ height: '80%', width: '80%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <DraggableMarker auth={auth} />
      </MapContainer>
    </div>
  );
};

export default MapView;
