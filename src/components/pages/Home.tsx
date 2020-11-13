import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';

import { Page, TabPage } from './TabPage';

const styles = StyleSheet.create({
  lead: {
    fontSize: 35,
    color: '#fff',
    marginTop: 50,
    marginBottom: 30,
  },
  point: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },
  unit: {
    fontSize: 30,
    color: '#fff',
  },
  trashList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  trash: {
    width: 160,
  },
});

const Component: React.FC = () => {
  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <Text style={styles.point}>
        1234<Text style={styles.unit}>pt</Text>
      </Text>
      <View style={styles.trashList}>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/11/12</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1534962303837-2edd16492781?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' }} />
        </Card>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/11/10</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1597348989645-46b190ce4918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }} />
        </Card>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/11/1</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1586045545601-36c8046cfdb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }} />
        </Card>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/10/29</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1587935949075-61ceadf12587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }} />
        </Card>
        <Card containerStyle={styles.trash}>
          <Card.Title>2020/10/20</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://images.unsplash.com/photo-1517664946321-87d2e16ebaa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }} />
        </Card>
      </View>
    </Page>
  );
};

export default TabPage('home', Component, 'home');
