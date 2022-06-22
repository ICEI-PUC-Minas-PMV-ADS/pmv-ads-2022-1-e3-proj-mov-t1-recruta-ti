import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';

import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';

import { useNavigation } from '@react-navigation/native';

const Mensagem = () => {
const [mensagens, setMensagens] = useState("");
const [profissional, setProfissional] = useState("");

const navigation = useNavigation();

  return (

    <Container>
      <Header title={'Mensagens'} goBack={() => navigation.goBack()} />
      <Body>
      <Text> Fale com o Profissional </Text>
        <Input
        label="Profissional"
          style={styles.input}
          onChangeText={setProfissional}
          value={profissional}
        />
        <Input
        label="Mensagem"
          style={styles.input}
          onChangeText={setMensagens}
          value={mensagens}
          multiline={true}
          numberOfLines={8}
          activeUnderlineColor="#DCDCDC"
      />
          <Button
            style={styles.button}
            mode="contained">
            Enviar
          </Button>
      </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    backgroundColor: '#049c9c',
  }
});

export default Mensagem;