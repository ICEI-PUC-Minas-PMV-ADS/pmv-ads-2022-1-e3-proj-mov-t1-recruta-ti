import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { Avatar, Text, IconButton, Appbar, List } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import AvatarSection from '../components/AvatarSection';

import { useUser } from '../contexts/UserContext';

import { logout } from '../services/auth.services';
import { getIdiomas } from '../services/idiomas.services';
import { getLinguagens } from '../services/linguagens.services';
import { getPerfil } from '../services/perfil.services';

import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import TextField from '../components/TextField';

const Perfil = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { setSigned, name, setName, id } = useUser();
  const [idiomas, setIdiomas] = useState([]);
  const [linguagens, setLinguagens] = useState([]);
  const [descricao, setDescricao] = useState([]);
  const [linkedin, setLinkedin] = useState([]);
  const [perfil, setPerfil] = useState([]);
  const [github, setGithub] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [disponibilidade, setDisponibilidade] = useState([]);

  useEffect(() => {
    getIdiomas().then((dados) => {
      setIdiomas(dados);
    });
    getLinguagens().then((dados) => {
      setLinguagens(dados);
    });
    getPerfil().then((dados) => {
      setPerfil(dados);
      console.log('Perfil: ', perfil);
      setDescricao(dados);
      setLinkedin(dados);
      setGithub(dados);
      setTelefone(dados);
    });
  }, [isFocused]);

  const renderItemIdioma = ({ item }) => (
    <List.Item
      title={item.idioma + ' (Nível: ' + item.proficiencia + ')'}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }} />
      )}
      onPress={() => navigation.navigate('Idiomas', { item })}
    />
  );
  const renderItemLinguagem = ({ item }) => (
    <List.Item
      title={item.linguagem + ' (Nível: ' + item.proficiencia + ')'}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }} />
      )}
      onPress={() => navigation.navigate('Linguagens', { item })}
    />
  );
  const renderItemDescricao = ({ item }) => (
    <Text onPress={() => navigation.navigate('PerfilEdit', { item })}>
      {'\n' + item.descricao}
    </Text>
  );
  const renderPerfil = ({ item }) => (
    <Text onPress={() => navigation.navigate('PerfilEdit', { item })}>
      {item.github}
      {'\n\n' + item.linkedin}
      {'\n\nTelefone: ' + item.telefone}
      {'\n\nDisponibilidade para mudança de endereço: ' + item.disponibilidade}
    </Text>
  );
  const handleLogout = () => {
    logout().then(res => {
      setSigned(false);
      setName(res.user.name);
      AsyncStorage.setItem('@TOKEN_KEY', '').then();
    });
  }

  return (
    <Container>
      <Header title={'Olá, ' + name + '!'} >
        <Appbar.Action icon="account-edit" onPress={() => navigation.navigate('PerfilEdit')} />
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Header>
      <Body>
        <AvatarSection>
          <View>
            <Avatar.Icon
              size={128}
              style={styles.avatar}
              icon="camera"
            />
          </View>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={perfil}
              renderItem={renderPerfil}
              style={styles.dadosPerfil}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </AvatarSection>
        <View style={styles.section}>
          <Text style={styles.title}>
            Descrição
          </Text>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList style={styles.innerText}
              data={descricao}
              multiline={true}
              renderItem={renderItemDescricao}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            Idiomas
            <IconButton
              icon="plus"
              iconColor={'red'}
              size={20}
              onPress={() => navigation.navigate('Idiomas')}
            />
          </Text>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList 
              data={idiomas}
              renderItem={renderItemIdioma}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            Linguagens
            <IconButton
              icon="plus"
              iconColor={'red'}
              size={20}
              onPress={() => navigation.navigate('Linguagens')}
            />
          </Text>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={linguagens}
              renderItem={renderItemLinguagem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'flex-start',
    margin: 5,
    backgroundColor: 'lightgrey'
  },
  title: {
    color: '#767672',
    fontWeight: 'bold',
    fontSize: 20,
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingBottom: 10,
  },
  innerText: {

  },
  dadosPerfil: {
    marginBottom: 5,
    fontSize:25
  },
  icon: {
    alignSelf: 'flex-end',
  },
  section: {
    flexDirection: 'column',
  },

});

export default Perfil;
