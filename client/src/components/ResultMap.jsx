import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon as leafletIcon } from 'leaflet';

import locationIcon from '../icons/icon-location.svg';

const customIcon = leafletIcon({
  iconUrl: locationIcon,
  iconSize: [40, 50],
});

const ResultMap = ({ lattitude, longitude }) => (
  <MapContainer
    center={[lattitude, longitude]}
    zoom={100}
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

export default ResultMap;
