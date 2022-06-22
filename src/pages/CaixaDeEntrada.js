import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';

import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';

import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    tipo: 0,
    usuario: 'Vaga PHP (Remoto)',
  },
  {
    id: 2,
    tipo: 0,
    usuario: 'Feeback da Entrevista',
  },

  {
    id: 3,
    tipo: 0,
    usuario: 'Endereço para entrevista',
  },
  {
    id: 4,
    tipo: 1,
    usuario: 'RES:Vaga C++ (Presencial)',
  },
  {
    id: 5,
    tipo: 1,
    usuario: 'RES: Entrevista UX',
  },

  {
    id: 6,
    tipo: 1,
    usuario: 'Endereço para entrevista',
  },
  {
    id: 7,
    tipo: 1,
    usuario: 'Endereço para entrevista',
  },
];

const CaixaDeEntrada = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <List.Item
      title={item.usuario}
      left={props => <List.Icon {...props} color={item.tipo == 0 ? '#000000' : '#808080'} icon="email" />}
    />
  );

  return (
    <Container>
      <Header title={'Caixa de Entrada'} />
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon="pencil"
          onPress={() => navigation.navigate('Mensagens')}
        />

      </Body>
    </Container>
  );

};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default CaixaDeEntrada;