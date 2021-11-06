import Header from './components/Header';

import { IpContextProvider } from './context/IpContext';

export default function App() {
  return (
    <IpContextProvider>
      <div className="App">
        <Header />
      </div>
    </IpContextProvider>
  );
}
