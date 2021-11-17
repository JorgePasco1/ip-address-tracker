import { useContext } from 'react';

import SearchBar from './SearchBar';
import { IpContext } from '../context/IpContext';

import './Header.css';
import ResultCard from './ResultCard';

const Header = () => {
  const { currentIp, setCurrentIp, currentIpLoading, userData } =
    useContext(IpContext);

  const { ip, isp, location } = userData;
  const { city, region, postalCode, timezone } = location || {};
  const locationString = location && `${city}, ${region} ${postalCode}`;
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <SearchBar
        initialValue={currentIp}
        onSubmit={setCurrentIp}
        disabled={currentIpLoading}
      />
      <div className="result-card-wrapper">
        <ResultCard
          ipAddress={ip}
          isp={isp}
          location={locationString}
          timezone={timezone}
        />
      </div>
    </header>
  );
};

export default Header;
