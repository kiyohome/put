import { activateKeepAwake } from 'expo-keep-awake';
import React from 'react';

import RootNav from './components/pages/RootNav';
import { TrashContextProvider } from './contexts/TrashContext';
import { UserContextProvider } from './contexts/UserContext';

const App: React.FC = () => {
  if (__DEV__) {
    activateKeepAwake();
  }
  return (
    <UserContextProvider>
      <TrashContextProvider>
        <RootNav />
      </TrashContextProvider>
    </UserContextProvider>
  );
};

export default App;
