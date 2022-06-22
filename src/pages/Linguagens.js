import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Appbar, Text, Button } from 'react-native-paper';

import Search from '../components/Search';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

import {insertLinguagem,updateLinguagem,deleteLinguagem} from '../services/linguagens.services';

const Linguagens = ({ route }) => {
    const navigation = useNavigation();

    const { item } = route.params ? route.params : {};

    const [linguagem, setLinguagem] = useState(null);
    const [proficiencia, setProficiencia] = useState(null);

    useEffect(() => {
        if (item) {
            setLinguagem(item.linguagem);
            setProficiencia(item.proficiencia);
        }
    }, [item]);

    const handleSalvar = () => {
        if (item) {
            updateLinguagem({
                linguagem: linguagem,
                proficiencia: proficiencia,
                id:item.id
            }).then(res => {
                navigation.goBack();
            });
        } else {
            insertLinguagem({
                linguagem: linguagem,
                proficiencia: proficiencia,
            }).then(res => {
                navigation.goBack();
            });
        }
    };
    const handleExcluir = () => {
        deleteLinguagem(item.id).then(res => {
            navigation.goBack();
        });
    };

    return (
        <Container>
            <Header title={'Linguagens'} goBack={() => navigation.goBack()} >
                <Appbar.Action icon="check" onPress={handleSalvar} />
                {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
            </Header>
            <Body>
                <Text style={styles.title}>Selecione o Linguagem</Text>
                <RadioButton.Group onValueChange={value => setLinguagem(value)} value={linguagem}>
                    <RadioButton.Item label="C#" value='C#' />
                    <RadioButton.Item label="JavaScript" value='JavaScript' />
                    <RadioButton.Item label="React-Native" value='React-Native' />
                    <RadioButton.Item label="Rust" value='Rust' />
                    <RadioButton.Item label="Java" value='Java' />
                    <RadioButton.Item label="C" value='C' />
                    <RadioButton.Item label="C++" value='C++' />
                    <RadioButton.Item label="HTML" value='HTML' />
                    <RadioButton.Item label="CSS" value='CSS' />
                </RadioButton.Group>
                <Text style={styles.title}>Informe sua proficiência</Text>
                <RadioButton.Group onValueChange={value => setProficiencia(value)} value={proficiencia}>
                    <RadioButton.Item label="Básico" value="Básico" />
                    <RadioButton.Item label="Intermediário" value="Intermediário" />
                    <RadioButton.Item label="Avançado" value="Avançado" />
                </RadioButton.Group>

                <Button mode="contained" style={styles.button} onPress={handleSalvar}>
                    Salvar
                </Button>

                {item && (
                    <Button
                        mode="contained"
                        color={'red'}
                        style={styles.button}
                        onPress={handleExcluir}>
                        Excluir
                    </Button>
                )}
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

export default Linguagens;