import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native-elements';

import { useUserContext } from '../../contexts/UserContext';
import { Page, MainPage } from './MainPage';

const Component: React.FC = () => {
  const userContext = useUserContext();
  const navigation = useNavigation();

  return (
    <Page>
      <Button
        title="Logout"
        onPress={async () => {
          await userContext.logout();
          navigation.navigate('login');
        }}
      />
    </Page>
  );
};

export default MainPage('logout', Component, 'lock');
