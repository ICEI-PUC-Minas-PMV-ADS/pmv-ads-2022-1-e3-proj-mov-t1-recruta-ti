import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Appbar, Text, Button } from 'react-native-paper';

import Search from '../components/Search';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

import {insertIdioma,updateIdioma,deleteIdioma} from '../services/idiomas.services';

const Idiomas = ({ route }) => {
    const navigation = useNavigation();

    const { item } = route.params ? route.params : {};

    const [idioma, setIdioma] = useState(null);
    const [proficiencia, setProficiencia] = useState(null);

    useEffect(() => {
        if (item) {
            setIdioma(item.idioma);
            setProficiencia(item.proficiencia);
        }
    }, [item]);

    const handleSalvar = () => {
        if (item) {
            updateIdioma({
                idioma: idioma,
                proficiencia: proficiencia,
                id:item.id
            }).then(res => {
                navigation.goBack();
            });
        } else {
            insertIdioma({
                idioma: idioma,
                proficiencia: proficiencia,
            }).then(res => {
                navigation.goBack();
            });
        }
    };

    const handleExcluir = () => {
        deleteIdioma(item.id).then(res => {
            navigation.goBack();
        });
    };
    return (
        <Container>
            <Header title={'Idiomas'} goBack={() => navigation.goBack()} >
                <Appbar.Action icon="check" onPress={handleSalvar} />
                {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
            </Header>
            <Body>
                <Search />

                <Text style={styles.title}>Selecione o idioma</Text>
                <RadioButton.Group onValueChange={value => setIdioma(value)} value={idioma}>
                    <RadioButton.Item label="Inglês" value='Inglês' />
                    <RadioButton.Item label="Espanhol" value='Espanhol' />
                    <RadioButton.Item label="Francês" value='Francês' />
                    <RadioButton.Item label="Alemão" value='Alemão' />
                    <RadioButton.Item label="Italiano" value='Italiano' />
                </RadioButton.Group>
                <Text style={styles.title}>Informe sua proficiência</Text>
                <RadioButton.Group onValueChange={value => setProficiencia(value)} value={proficiencia}>
                    <RadioButton.Item label="Básico" value="Básico" />
                    <RadioButton.Item label="Intermediário" value="Intermediário" />
                    <RadioButton.Item label="Avançado" value="Avançado" />
                    <RadioButton.Item label="Fluente" value="Fluente" />
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

export default Idiomas;