import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {
  Avatar,
  Appbar,
  TextInput,
  Button,
  Text,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';

const Mensagens = () => {
  const LeftContent = (props) => (
    <Avatar.Icon {...props} icon="calendar-check" />
  );
  return (
    <Container>
      <Header title={'Caixa de Entrada'} />
      <Body>
        <Card>
          <Card.Title
            title="Oportunidade Node-JS"
            subtitle="Solicitação de entrevista"
            left={LeftContent}
          />
          <Card.Content>
            <Title>Olá</Title>
            <Paragraph>
              "Sou Recrutador da Empresa XX e gostaria de conversar com você
              sobre uma oportunidade para trabalhar com Node-JS."
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Excluir</Button>
            <Button>Responder</Button>
          </Card.Actions>
        </Card>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    borderColor: '#37372C',
    margin: 8,
  },
});

export default Mensagens;
