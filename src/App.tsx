import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { activateKeepAwake } from 'expo-keep-awake';
import React from 'react';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Picking from './components/pages/Picking';
import { TrashContextProvider } from './contexts/TrashContext';
import { UserContextProvider } from './contexts/UserContext';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  if (__DEV__) {
    activateKeepAwake();
  }
  return (
    <UserContextProvider>
      <TrashContextProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="home">
            <Tab.Screen {...Home} />
            <Tab.Screen {...Picking} />
            <Tab.Screen {...Login} />
          </Tab.Navigator>
        </NavigationContainer>
      </TrashContextProvider>
    </UserContextProvider>
  );
};

export default App;
