import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { activateKeepAwake } from 'expo-keep-awake';
import React from 'react';

import Auth from './components/pages/Auth';
import Home from './components/pages/Home';
import Picking from './components/pages/Picking';
import { TrashContextProvider } from './contexts/TrashContext';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  if (__DEV__) {
    activateKeepAwake();
  }
  return (
    <TrashContextProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="home">
          <Tab.Screen {...Home} />
          <Tab.Screen {...Picking} />
          <Tab.Screen {...Auth} />
        </Tab.Navigator>
      </NavigationContainer>
    </TrashContextProvider>
  );
};

export default App;
