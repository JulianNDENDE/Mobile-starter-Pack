import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Switch, TextInput, List } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import avatarImage from '../../assets/avatar.jpg';

export default function Settings() {
  const [notifications, setNotifications] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleSave = () => {
    console.log('Saving settings...');
  };

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.cancelled) {
      setImageUri(result.assets[0].uri);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={avatarImage} style={styles.avatar} />
      <List.Section>
        <List.Subheader>
          <Text style={{ fontWeight: 'bold' }}>Account</Text>
        </List.Subheader>
        <List.Item
          title="Change profile picture"
          onPress={handleChooseImage}
          left={(props) => <List.Icon {...props} icon="camera" />}
        />
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>
          <Text style={{ fontWeight: 'bold' }}>Preferences</Text>
        </List.Subheader>
        <List.Item
          title="Enable notifications"
          right={() => (
            <Switch
              value={notifications}
              onValueChange={handleNotificationsChange}
            />
          )}
        />
      </List.Section>

      <List.Section>
        <List.Item
          title="Save settings"
          onPress={handleSave}
          left={(props) => <List.Icon {...props} icon="content-save" />}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 30, 
  },
});
