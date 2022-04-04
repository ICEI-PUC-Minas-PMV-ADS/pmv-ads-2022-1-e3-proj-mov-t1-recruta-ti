import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {
  
  const navigation = useNavigation();

  const [name, setName] = useState('Rodrigo Lobenwein');
  const [email, setEmail] = useState('rodrigo@sixpro.pro');
  const [password, setPassword] = useState('Teste123!');

  const handleRegister = () => {
    
    register({
      name: name,
      email:email,
      password: password
    }).then( res => {
      console.log(res);

      if(res){
        Alert.alert('Atenção','Usuário cadastrado com sucesso!');
      }else{
        Alert.alert('Atenção','Usuário não foi cadastrado! Tente novamente mais tarde');
      }
    });
  }

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Headline style={styles.textHeader}>Registro</Headline>
      <Body>
        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}>
          Registrar
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    backgroundColor: '#049c9c',
  },
    textHeader: {
    textAlign: 'center',
  },
  header: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
});

export default Register;
