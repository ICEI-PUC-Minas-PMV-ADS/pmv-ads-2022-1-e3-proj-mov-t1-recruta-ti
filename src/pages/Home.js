import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import Mensagens from './Mensagens';
import Perfil from './Perfil';

const Home = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'perfil', title: 'Perfil', icon: 'account-star' },
    { key: 'mensagens', title: 'Mensagens', icon: 'email-box' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    perfil: Perfil,
    mensagens: Mensagens,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#049c9c' }}
    />
  );
};

export default Home;
