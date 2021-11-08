import Header from './components/Header';
import MainSection from './components/MainSection';

import { IpContextProvider } from './context/IpContext';

export default function App() {
  return (
    <IpContextProvider>
      <div className="App">
        <Header />
        <MainSection />
      </div>
    </IpContextProvider>
  );
}
