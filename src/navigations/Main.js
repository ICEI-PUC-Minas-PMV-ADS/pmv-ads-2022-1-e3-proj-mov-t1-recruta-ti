import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Mensagens from '../pages/Mensagens';
import Idiomas from '../pages/Idiomas';
import Linguagens from '../pages/Linguagens';
import PerfilEdit from '../pages/PerfilEdit';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Mensagens"
        component={Mensagens}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Idiomas"
        component={Idiomas}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Linguagens"
        component={Linguagens}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="PerfilEdit"
        component={PerfilEdit}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
