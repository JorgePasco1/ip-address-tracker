import { createContext, useState } from 'react';

export const IpContext = createContext();

export const IpContextProvider = ({ children }) => {
  const [currentIp, setCurrentIp] = useState('192.168.1.1');
  return (
    <IpContext.Provider value={{ currentIp, setCurrentIp }}>
      {children}
    </IpContext.Provider>
  );
};
