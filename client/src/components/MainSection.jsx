import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon as leafletIcon } from 'leaflet';

import { IpContext } from '../context/IpContext';

import locationIcon from '../icons/icon-location.svg';
import './MainSection.css';

const MainSection = () => {
  const { userData } = useContext(IpContext);
  const { lat, lng } = userData.location || {};

  return (
    <main>{lat && lng && <ResultMap lattitude={lat} longitude={lng} />}</main>
  );
};

const customIcon = leafletIcon({
  iconUrl: locationIcon,
  iconSize: [40, 50],
});

const ResultMap = ({ lattitude, longitude }) => (
  <MapContainer
    center={[lattitude, longitude]}
    zoom={100}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lattitude, longitude]} icon={customIcon}>
      <Popup>You are here.</Popup>
    </Marker>
  </MapContainer>
);

export default MainSection;

ResultMap.propTypes = {
  lattitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
