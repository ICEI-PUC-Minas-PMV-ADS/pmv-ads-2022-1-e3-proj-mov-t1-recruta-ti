import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import CaixaDeEntrada from './CaixaDeEntrada';
import Perfil from './Perfil';

const Home = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'perfil', title: 'Perfil', icon: 'account-star' },
    { key: 'caixaDeEntrada', title: 'Caixa de Entrada', icon: 'email-box' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    perfil: Perfil,
    caixaDeEntrada: CaixaDeEntrada,
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
