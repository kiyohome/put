import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

import { useUserContext } from '../../contexts/UserContext';
import { Page, TabPage } from './TabPage';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    paddingLeft: 11,
    fontSize: 20,
    color: '#fff',
  },
});

const Component: React.FC = () => {
  const userContext = useUserContext();
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Page>
      <Text style={styles.label}>User name</Text>
      <Input placeholder="your name" value={userName} onChangeText={(text) => setUserName(text)} />
      <Text style={styles.label}>Password</Text>
      <Input placeholder="xxxxxxxxxx" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
      <Button
        title="Login"
        onPress={async () => {
          await userContext.login(userName, password);
          setUserName('');
          setPassword('');
          navigation.navigate('home');
        }}
      />
    </Page>
  );
};

export default TabPage('login', Component, 'lock');
