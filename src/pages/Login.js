import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned } = useUser();

  const [email, setEmail] = useState('rodrigo@sixpro.pro');
  const [password, setPassword] = useState('Teste123!');

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Body>
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
          onPress={() => setSigned(true)}>
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
});

export default Login;
