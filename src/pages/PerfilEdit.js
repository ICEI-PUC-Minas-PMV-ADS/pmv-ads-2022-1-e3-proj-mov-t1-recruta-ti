import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, RadioButton, Appbar, Text, Button } from 'react-native-paper';

import Input from '../components/Input';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import { updatePerfil,insertPerfil } from '../services/perfil.services';

const PerfilEdit = ({ route }) => {
    const navigation = useNavigation();

    const { item } = route.params ? route.params : {};

    const { id,setId } = useUser();
    const [descricao, setDescricao] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [telefone, setTelefone] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [github, setGithub] = useState('');

    useEffect(() => {
        if (item) {
            setDescricao(item.descricao);
            setLinkedIn(item.linkedin);
            setTelefone(item.telefone);
            setDisponibilidade(item.disponibilidade);
            setGithub(item.github);
            setId(id);
        }
    }, [item]);

    const handleSalvar = () => {

        if (item) {
            updatePerfil({
                descricao: descricao,
                linkedin: linkedin,
                telefone: telefone,
                disponibilidade: disponibilidade,
                github: github,
                userId: id,
                id:item.id
            }).then(res => {
                navigation.goBack();
            });
        }else {
            insertPerfil({
                descricao: descricao,
                linkedin: linkedin,
                telefone: telefone,
                disponibilidade: disponibilidade,
                github: github,
                userId: id
            }).then(res => {
                navigation.goBack();
            });
        }
    }
    return (
        <Container>
            <Header title={'Editar dados pessoais'} goBack={() => navigation.goBack()} >
                <Appbar.Action icon="check" onPress={handleSalvar} />
            </Header>
            <Body>
                <Text style={styles.title}>Descrição</Text>
                <Input
                    label="Descrição"
                    multiline={true}
                    value={descricao}
                    onChangeText={(text) => setDescricao(text)}
                    left={<TextInput.Icon name="text" />}
                />
                <Text style={styles.title}>LinkedIn</Text>
                <Input
                    label="LinkedIn"
                    autoCapitalize='none'
                    value={linkedin}
                    onChangeText={(text) => setLinkedIn(text)}
                    left={<TextInput.Icon name="linkedin" />}
                />
                <Text style={styles.title}>Disponibilidade para Mudança</Text>
                <Input
                    label="Disponibilidade"
                    value={disponibilidade}
                    onChangeText={(text) => setDisponibilidade(text)}
                    left={<TextInput.Icon name="wallet-travel" />}
                />
                <Text style={styles.title}>Perfil Github</Text>
                <Input
                    label="Github"
                    value={github}
                    autoCapitalize='none'
                    onChangeText={(text) => setGithub(text)}
                    left={<TextInput.Icon name="github" />}
                />
                <Text style={styles.title}>Telefone</Text>
                <Input
                    label="Telefone"
                    value={telefone}
                    keyboardType='phone-pad'
                    onChangeText={(text) => setTelefone(text)}
                    left={<TextInput.Icon name="phone" />}
                />
                <Button mode="contained" style={styles.button} onPress={handleSalvar}>
                    Salvar
                </Button>
            </Body>
        </Container >
    );
};
const styles = StyleSheet.create({
    containerRadio: {
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    containerRadioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        marginBottom: 8,
        backgroundColor: '#049c9c',
    },
    title: {
        color: '#767672',
        fontWeight: 'bold',
        fontSize: 20,
        borderTopColor: 'black',
        borderTopWidth: 1,
        paddingBottom: 10,
    }
});

export default PerfilEdit;