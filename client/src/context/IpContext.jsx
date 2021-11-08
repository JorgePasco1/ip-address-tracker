import { createContext, useEffect, useState } from 'react';
import { getIpData } from '../proxies/locationServerProxy';

export const IpContext = createContext();
export const IpContextProvider = ({ children }) => {
  const [currentIp, setCurrentIp] = useState('');
  const [currentIpLoading, setCurrentIpLoading] = useState(false);

  useEffect(() => {
    const getIpInfo = async () => {
      setCurrentIpLoading(true);
      const data = await getIpData();
      setCurrentIp(data.ip);
      setCurrentIpLoading(false);
    };

    getIpInfo();
  }, []);

  return (
    <IpContext.Provider value={{ currentIp, setCurrentIp, currentIpLoading }}>
      {children}
    </IpContext.Provider>
  );
};
