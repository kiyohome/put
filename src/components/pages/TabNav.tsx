import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './Home';
import Logout from './Logout';
import Picking from './Picking';

const Tab = createBottomTabNavigator();

const TabNav: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen {...Home} />
      <Tab.Screen {...Picking} />
      <Tab.Screen {...Logout} />
    </Tab.Navigator>
  );
};

export default { name: 'main', component: TabNav };
