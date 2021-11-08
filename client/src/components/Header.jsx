import { useContext } from 'react';

import SearchBar from './SearchBar';
import { IpContext } from '../context/IpContext';

import './Header.css';
import ResultCard from './ResultCard';

const Header = () => {
  const { currentIp, setCurrentIp, currentIpLoading } = useContext(IpContext);
  console.log({currentIp})

  return (
    <header>
      <h1>IP Address Tracker</h1>
      <SearchBar initialValue={currentIp} onSubmit={setCurrentIp} disabled={currentIpLoading} />
      <div className="result-card-wrapper">
        <ResultCard />
      </div>
    </header>
  );
};

export default Header;
