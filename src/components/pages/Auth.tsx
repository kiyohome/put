import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

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
  const navigation = useNavigation();
  return (
    <Page>
      <Text style={styles.label}>Email</Text>
      <Input placeholder="email@example.com" />
      <Text style={styles.label}>Password</Text>
      <Input placeholder="xxxxxxxxxx" secureTextEntry />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('home');
        }}
      />
    </Page>
  );
};

export default TabPage('login', Component, 'lock');
