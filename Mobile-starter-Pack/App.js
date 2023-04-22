import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Login from './src/screens/Login';
import Main from './src/screens/Main';
import HomeScreen from './src/screens/HomeScreen';
import Settings from './src/screens/Settings';
import Chat from './src/screens/Chat';
import TopNavBar from './src/components/topNavBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 15, marginTop: 15, marginBottom: 15 }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
