import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import ValidateEmail from '../components/ValidateEmail';
import ValidatePassword from '../components/ValidatePassword';

import { useNavigation } from '@react-navigation/native';

import { register } from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (ValidateEmail(email)) {
      if (ValidatePassword(password)) {
        register({
          name: name,
          email: email,
          password: password
    
        }).then(res => {
          if (res) {
            Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso!');
            navigation.navigate('Login');
          } else {
    
            Alert.alert('Atenção: Erro!', 'Usuário não foi cadastrado! Tente novamente mais tarde');
          }
        });
    
      }
      else {
        Alert.alert('Senha fraca!', 'A senha deve ter no mínimo 8 dígitos, sendo: pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&)!');
      }
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
      <Headline style={styles.textHeader}>Registro</Headline>
      <Body>
        <Input
          label="Nome"
          autoCapitalize='words'
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Email"
          autoCapitalize='none'
          keyboardType='email-address'
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
