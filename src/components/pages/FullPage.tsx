import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Page: React.FC<PropsWithChildren<object>> = ({ children }) => {
  return <View style={styles.page}>{children}</View>;
};

function FullPage(screenName: string, page: React.FC) {
  return {
    name: screenName,
    component: page,
  };
}

export { Page, FullPage };
