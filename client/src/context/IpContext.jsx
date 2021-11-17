import { createContext, useEffect, useState } from 'react';
import { getIpAdress } from '../proxies/publicIpProxy';
import { getIpData } from '../proxies/locationServerProxy';

export const IpContext = createContext();
export const IpContextProvider = ({ children }) => {
  const [currentIp, setCurrentIp] = useState('');
  const [currentIpLoading, setCurrentIpLoading] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getIpInfo = async () => {
      setCurrentIpLoading(true);
      setCurrentIp(await getIpAdress());
      setUserData(await getIpData(currentIp));
      setCurrentIpLoading(false);
    };

    getIpInfo();
  }, [currentIp]);

  return (
    <IpContext.Provider value={{ currentIp, setCurrentIp, currentIpLoading, userData }}>
      {children}
    </IpContext.Provider>
  );
};
