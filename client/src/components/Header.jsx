import { useContext } from 'react';

import SearchBar from './SearchBar';
import { IpContext } from '../context/IpContext';

import './Header.css';
import ResultCard from './ResultCard';

const Header = () => {
  const { currentIp, setCurrentIp } = useContext(IpContext);

  return (
    <header>
      <h1>IP Address Tracker</h1>
      <SearchBar initialValue={currentIp} onSubmit={setCurrentIp} />
      <div className="result-card-wrapper">
        <ResultCard />
      </div>
    </header>
  );
};

export default Header;
