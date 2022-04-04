import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Avatar , Text, List } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title={'Perfil'} />
      <Body>
        <Avatar.Image 
          size={128} 
          source={require('../assets/135849180-a12795e2-75ab-4041-9551-f87562ed8b33.png')}
          style={styles.avatar} 
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatar:{
    alignSelf:'center'
  }
});

export default Perfil;
