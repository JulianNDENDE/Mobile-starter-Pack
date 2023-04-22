import React from 'react';
import { View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

import Settings from './Settings';
import HomeScreen from './HomeScreen';

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'HomeScreen', title: 'HomeScreen', icon: 'home' },
    { key: 'Settings', title: 'Settings', icon: 'settings' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    HomeScreen: () => <HomeScreen />,
    Settings: () => <Settings />,
  });

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default Main;
