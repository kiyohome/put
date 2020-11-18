import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, Icon, normalize } from 'react-native-elements';
import { useUserContext } from '../../contexts/UserContext';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00bfff',
  },
  page: {
    flexGrow: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Page: React.FC<Props> = ({ children }) => {
  const userContext = useUserContext();
  const name = userContext.isLoggedIn ? userContext.userName : 'guest';

  return (
    <>
      <Header
        leftComponent={{ text: 'PUT', style: { color: '#fff', fontWeight: '700' } }}
        rightComponent={{ text: name, style: { color: '#fff' } }}
      />
      <ScrollView contentContainerStyle={styles.page}>{children}</ScrollView>
    </>
  );
};

const TabPage = (screenName: string, page: React.FC, iconName: string) => {
  return {
    name: screenName,
    component: page,
    options: {
      tabBarIcon: () => <Icon name={iconName} color="#00bfff" size={normalize(24)} />,
    },
  };
};

export { Page, TabPage };
