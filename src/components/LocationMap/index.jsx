import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import MapLink from '../MapLink';

// Restore default marker icons (react-leaflet's bundling defaults are broken)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const MAP_CONTAINER_STYLE = {
  height: '350px',
  width: '90%',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '10px',
  maxWidth: '580px',
  maxHeight: '530px',
  borderRadius: '14px',
};

const OFFICE_COORDS = [-33.8097541497481, 151.14841320640292];
const GOOGLE_MAPS_LINK = {
  text: 'View on Google Maps',
  url: 'https://goo.gl/maps/hrBNba4G8a1EbgFg6',
};
const POPUP_HOVER_DELAY_MS = 500;

function LocationMap() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openPopup = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsPopupOpen(true);
  };

  const schedulePopupClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsPopupOpen(false);
    }, POPUP_HOVER_DELAY_MS);
  };

  return (
    <div style={MAP_CONTAINER_STYLE}>
      <MapContainer
        center={OFFICE_COORDS}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', borderRadius: '14px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker
          position={OFFICE_COORDS}
          eventHandlers={{
            mouseover: openPopup,
            mouseout: schedulePopupClose,
          }}
        >
          {isPopupOpen && (
            <Popup
              closeButton={false}
              autoClose={false}
              closeOnEscapeKey={false}
              closeOnClick={false}
              interactive
            >
              <div
                onMouseEnter={() => clearTimeout(closeTimeoutRef.current)}
                onMouseLeave={schedulePopupClose}
                style={{ textAlign: 'center', minWidth: '200px' }}
              >
                <p>
                  <strong>JDP Electrical Services</strong>
                </p>
                <p>
                  17/4-6 Chaplin Dr,
                  <br />
                  Lane Cove West NSW 2066
                </p>
                <ul className="list-unstyled" style={{ padding: 0 }}>
                  <li>
                    <MapLink
                      text={GOOGLE_MAPS_LINK.text}
                      url={GOOGLE_MAPS_LINK.url}
                    />
                  </li>
                </ul>
              </div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
}

export default React.memo(LocationMap);
