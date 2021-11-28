import { useContext } from 'react';

import { IpContext } from '../context/IpContext';
import ResultMap from './ResultMap';

import './MainSection.css';

const MainSection = () => {
  const { userData, currentIpLoading } = useContext(IpContext);
  const { lat, lng } = userData.location || {};

  const MainContent = () => (
    <main>{lat && lng && <ResultMap lattitude={lat} longitude={lng} />}</main>
  );

  return !currentIpLoading ? <MainContent /> : 'Loading';
};

export default MainSection;
