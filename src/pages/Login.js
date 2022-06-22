import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TextInput, Button } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import ValidateEmail from '../components/ValidateEmail';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import { login } from '../services/auth.services';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setName,setId } = useUser();

  const [email, setEmail] = useState('rodrigo.lobenwein@sga.pucminas.br');
  const [password, setPassword] = useState('Aaa@123456789');

  const handleLogin = () => {
    if (ValidateEmail(email)) {
      login({
        email: email,
        password: password
      }).then(res => {
        if (res && res.user) {
          setSigned(true);
          setName(res.user.name);
          setId(res.user.id);
          AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
        } else {
          Alert.alert('Atenção', 'Usuário ou senha inválidos!');
        }

      });

    }
    else {
      Alert.alert('Erro!', 'Endereço de e-mail inválido!');
    }
  }

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Body>
        <Input
          label="Email"
          value={email}
          autoCapitalize='none'
          keyboardType='email-address'
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
          onPress={handleLogin}>
          Login
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Registrar
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
  header: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
})

export default Login;
