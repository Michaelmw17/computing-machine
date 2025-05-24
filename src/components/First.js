import React, { useState, useRef } from 'react';
import Href from './MapHerf';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const containerStyle = {
  height: `350px`,
  width: '90%',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '10px',
  maxWidth: '580px',
  maxHeight: '530px',
  borderRadius: '14px',
};

const center = [-33.8097541497481, 151.14841320640292];
const testData = {
  text: 'View on Google Maps',
  link: 'https://goo.gl/maps/hrBNba4G8a1EbgFg6',
};

function MyComponent() {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseOver = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 500); // Delay to allow clicking inside
  };

  return (
    <div style={containerStyle}>
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', borderRadius: '14px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker
          position={center}
          eventHandlers={{
            mouseover: handleMouseOver,
            mouseout: handleMouseOut,
          }}
        >
          {isHovered && (
            <Popup
              closeButton={false}
              autoClose={false}
              closeOnEscapeKey={false}
              closeOnClick={false}
              interactive
            >
              <div
                onMouseEnter={() => clearTimeout(timeoutRef.current)}
                onMouseLeave={handleMouseOut}
                style={{ textAlign: 'center', minWidth: '200px' }}
              >
                <p>
                  <strong>JDP Electrical</strong>
                </p>
                <p>
                  17/4-6 Chaplin Dr,
                  <br />
                  Lane Cove West NSW 2066
                </p>
                <ul className="list-unstyled" style={{ padding: 0 }}>
                  <li>
                    <Href text={testData.text} url={testData.link} />
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

export default React.memo(MyComponent);
