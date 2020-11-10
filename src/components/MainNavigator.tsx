import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import put from './pages/put';

// テンプレートでは、スタックを利用しています。
// アプリでタブの利用する場合は、ここをcreateBottomTabNavigatorに変更してください。
const Main = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Main.Navigator initialRouteName={put.name}>
      <Main.Screen name={put.name} component={put.component} options={put.options} />
    </Main.Navigator>
  );
}
