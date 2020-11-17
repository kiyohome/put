import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { BackendService } from '../../backend/BackendService';

import { Page, TabPage } from './TabPage';

const styles = StyleSheet.create({
  lead: {
    fontSize: 35,
    color: '#fff',
    marginBottom: 30,
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  or: {
    fontSize: 20,
    color: '#fff',
    marginTop: 6,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  upload: {
    backgroundColor: '#ff1493',
  },
});

const Component: React.FC = () => {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickUpTrash = async () => {
    const response = await fetch(image);
    const trash = await response.blob();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    BackendService.postTrash(trash).then((response) => console.log(response));
    setImage('');
  };

  return (
    <Page>
      <Text style={styles.lead}>Let's go pick up trash!</Text>
      <View style={styles.select}>
        <Button title="Take a photo" onPress={takePhoto} />
        <Text style={styles.or}>or</Text>
        <Button title="Pick an image" onPress={pickImage} />
      </View>
      {image !== '' && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Pick up trash!" onPress={pickUpTrash} buttonStyle={styles.upload} disabled={image === ''} />
    </Page>
  );
};

export default TabPage('pick', Component, 'camera');
