import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { Trash } from '../../backend/generated-rest-client';
import { useTrashContext } from '../../contexts/TrashContext';
import { MainPage, Page } from './MainPage';

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

  const trashContext = useTrashContext();

  useEffect(() => {
    trashContext.getTrashList();
  }, []);

  const renderTrash = (trash: Trash) => (
    <Card containerStyle={styles.trash}>
      <Card.Title>{trash.date}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: trash.imageUrl }} />
    </Card>
  );

  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <Text style={styles.point}>
        {trashContext.point}
        <Text style={styles.unit}>pt</Text>
      </Text>
      <FlatList
        data={trashContext.trashList}
        renderItem={renderTrash}
        contentContainerStyle={styles.trashList} />
    </Page>
  );
};

export default MainPage('home', Component, 'home');
