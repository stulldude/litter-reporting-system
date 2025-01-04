import React, { useState, useRef, useMemo } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useAuth } from "react-oidc-context";
import L from 'leaflet'
import RecordForm from './RecordForm';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

type AuthContext = ReturnType<typeof useAuth>;

interface AuthenticatedViewProps {
  auth: AuthContext;
}

const center = {
    lat: 34.0522,
    lng: -118.2437,
  }

interface AddMarkerButtonProps {
  setAddMarkerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddMarkerButton: React.FC<AddMarkerButtonProps> = ({ setAddMarkerVisible }) => {
    function clickHandler() {
        setAddMarkerVisible(false)
    }

    return (
        <button style={{ position: "absolute",
            top: "20px",
            right: "20px",
            padding: "10px",
            zIndex: "400",}} onClick={clickHandler}>Add Litter Location</button>
    )
}


const DraggableMarker: React.FC<AuthenticatedViewProps> = ({auth}) => {
    const [position, setPosition] = useState(center)
    const [addMarkerVisible, setAddMarkerVisible] = useState(true)
    const markerRef = useRef<L.Marker>(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    
  
    return (
        addMarkerVisible ?
        <AddMarkerButton setAddMarkerVisible={setAddMarkerVisible} /> :
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        //TODO  Add a popup to the marker
        <Popup>
            <RecordForm auth={auth}/>
        </Popup>
      </Marker>
    )
  }


export default DraggableMarker;