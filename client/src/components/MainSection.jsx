import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './MainSection.css';

const MainSection = () => {
  return (
    <main>
      <MapContainer center={[51.505, -0.09]} zoom={100} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </main>
  );
};

export default MainSection;
