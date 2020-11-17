import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';

import { BackendService } from '../../backend/BackendService';
import { Trash } from '../../backend/generated-rest-client';
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
  const [point, setPoint] = useState<number>(0);
  const [trashList, setTrashList] = useState<Trash[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    BackendService.getTrashList().then((response) => setTrashList(response));
    trashList.forEach((trash) => setPoint(point + trash.point));
  }, []);

  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <Text style={styles.point}>
        {point}
        <Text style={styles.unit}>pt</Text>
      </Text>
      <View style={styles.trashList}>
        {trashList.map((trash) => (
          <Card key={trash.id} containerStyle={styles.trash}>
            <Card.Title>{trash.date}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: trash.imageUrl }} />
          </Card>
        ))}
      </View>
    </Page>
  );
};

export default TabPage('home', Component, 'home');
