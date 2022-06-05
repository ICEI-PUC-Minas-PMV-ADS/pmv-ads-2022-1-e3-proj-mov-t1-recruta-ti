# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

## Telas: Login e Registro (RF-001)
- Responsável: Rodrigo Lobenwein
- Situação: concluído com melhorias
- Repositório (Expo): https://snack.expo.dev/@rodrigolobenwein/recruta-ti

### **Screenshots:**
![Login](/docs/img/print_Login.png)
![Registro](/docs/img/print_Registro.png)



### **Descrição:**

Para a criação das funcionalidades de Login e Registro foi necessária a criação de diversos arquivos, com diferentes objetivos, os quais são explicados abaixo:

#### **Componentes:**
* O [Body.js](/src/components/Body.js) é um componente que retorna apenas uma View e é utilizado para padronizar o corpo de todas as telas,  com o seguinte estilo:
    * Margem 8 - para ter um bom espaçamento entre a borda da tela e os componentes dentro da view;
    * Cor de fundo "#d0ecec" - definida no protótipo;
    * Flex 1 - determinando o "preenchimento" de 100% do espaço disponível pelo componente
* O [Container.js](/src/components/Container.js) é um componente genérico, também utilizado para padronização visual das telas. Retorna apenas uma view.
* [Input.js](/src/components/Input.js) é um componente para padronizar os campos de entrada de dados
* Por fim, o componente [Logo.js](/src/components/Logo.js) retorna uma imagem e padroniza seu tamanho.

#### **Contexto:**
- [UserContext.js](/src/contexts/UserContext.js), o contexto da aplicação, que retorna o nome do usuário e se este está autenticado, além de exportar a função "useUser".

#### **Navegação:**
Arquivos [Auth.js](/src/navigations/Auth.js), [Main.js](/src/navigations/Main.js) e [Route.js](/src/navigations/Route.js).
* Route determina qual é a rota de navegação, isto é, se será a rota principal (Main) ou a rota de autenticação (Auth). A determinação é feita por um operador ternário, verificando se o usuário está autenticado (através da constante "signed" da função useUser, do contexto): se autenticado, utiliza a rota Main, caso contrário, rota Auth.
* Auth é a rota de autenticação, direcionando para a tela de Login ou Registro
* Main é a rota principal: uma vez que o usuário está autenticado, direcionará para a página inicial (perfil do profissional).

#### **Serviços:**
* [webapi.services.js](/src/services/webapi.services.js), que cria e exporta uma API Axios, utilizada para as operações com o backend, como armazenamento no banco de dados.
* [auth.services.js](/src/services/auth.services.js), que utiliza a API Axios para criar os métodos POST para o Login e o Registro
* [urls.js](/src/services/urls.js), que exporta a url de conexão com o banco de dados - criado com o objetivo de facilitar a manipulação da url.

#### **Telas:**
* [Login.js](/src/pages/Login.js)
* [Register.js](/src/pages/Register.js)
Ambas as telas foram criadas utilizando os componentes, serviços, contexto e navegação citados anteriormente.

### **Problemas encontrados:**
- A plataforma Expo é muito intuitiva e fácil de usar, ajudando bastante na criação e na formatação do código. Porém, estou tendo dificuldades na depuração do código e frequentemente perco horas para encontrar simples erros de digitação.
- Outro dificultador no desenvolvimento é o JSON-Server e Local Tunnel: embora seja muito conveniente (e muito mais simples se comparado ao desenvolvimento completo de um backend para a aplicação), cada vez que o servidor é executado (após desligar ou reiniciar o computador, por exemplo), é gerada uma nova url que deve ser atualizada na aplicação (razão pela qual foi criado o serviço urls.js mencionado anteriormente).
- É possível a utilização do JSON-Server no Heroku, o que manteria a url inalterada. De fato, foi criada a aplicação naquela plataforma (que pode ser vista em https://fake-api-json-server-recrutati.herokuapp.com/). Entretanto, até o momento não consegui resultados práticos: a aplicação consegue se conectar ao servidor, mas as requisições retornam o erro 404 e eu ainda não descobri a causa.

### **Trecho de Código:**
```Javascript
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0ecec',
    margin: 8,
  },
});

export default Body;
```
### **Próximos Passos:**
Na próxima etapa farei mais algumas pesquisas e tentativas para a utilização do JSON-Server no Heroku.Também tentarei implementar a validação dos dados no registro, como tamanho mínimo e máximo da senha.

### **Melhorias implementadas (Etapa 4):**
- Nos componentes TextInput foi adicionada a propriedade para mudança do leiaute do teclado (`keyboardType`) para os campos de email (Telas de Login e Registro). Assim, o teclado exibido já inclui uma tecla para @ e uma tecla ".com".
- Também foi adicionada a propriedade `autoCapitalize`:
  - Campos de e-mail: `none` - o teclado é aberto em letras minúsculas;
  - Campo de nome: `words` - o teclado muda automaticamente para letras maiúsculas quando é inserido o caractere de espaço.

#### **Validação de dados:**
- Foram adicionadas duas funções de validação dos dados de entrada do usuário: e-mail e senha.
  - A função `ValidateEmail` (arquivo [ValidateEmail.js](/src/components/ValidateEmail.js)) verifica se o dado informado se parece com um endereço de e-mail (verifica se tem, no mínimo, uma sequência de caracteres, uma arroba, outra sequência de caracteres, um ponto e mais uma sequência de caracteres) e um ponto após).
  - A função `ValidatePassword` (arquivo [ValidatePassword.js](/src/components/ValidatePassword.js)) verifica, através de uma função Regex (regular expression), se a senha possui pelo menos 8 caracteres, sendo uma letra maiúscula, uma minúscula, um número e um caractere especial.
Adicionada função de validação do e-mail nas telas de Login e Registro;

#### **Persistência de dados:**
Em ambas as funcionalidades trabalhadas há utilização de persistência: na tela de Registro há a persistência remota, com a utilização da Fake API, e os dados são armazenados no BD; na tela de login, quando o login é realizado, é armazenado localmente o Token do usuário (persistência local), que é fornecido pelo JSON-Server-Auth.

#### **Hospedagem:**
O servidor foi hospedado no Heroku e pode ser acessado em [https://fake-api-json-server-recrutati.herokuapp.com/](https://fake-api-json-server-recrutati.herokuapp.com/).

### **Trecho de Código das melhorias implementadas:**
```Javascript
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
```
### **Problemas encontrados durante a Etapa 4:**
A função de validação da senha não estava funcionando. Inicialmente, criei a função dentro do evento `onPress` do botão, que chamava a função `handleRegister` caso a senha estivesse válida. Mas, após vários testes, descobri que a validação deveria ser dentro da função `handleRegister`. O mesmo ocorreu para a validação do e-mail (tanto no Registro quanto no Login).

Tive enorme dificuldade para hospedar o JSON-Server no Heroku.
Li na documentação tanto do [JSON-Server](https://github.com/typicode/json-server) quanto do [JSON-Server-auth](https://github.com/jeremyben/json-server-auth) como fazer quais os dados necessários no arquivo server.js. Eu não havia me atentado ao fato de que é necessário o JSON-Server-Auth neste arquivo, e provavelmente era este o motivo dos erros encontrados durante a etapa 3 (Resposta 404 às requisições).
Mesmo com estas alterações, ao construir o servidor no Heroku, o log sempre informava o erro `Cannot find module 'json-server`. Após diversas pesquisas descobri que o Heroku não estava instalando o JSON-Server (nem o Auth) porque ambos estavam listados no `package.json` em `devDependencies`.
Ajustadas as dependências, o erro anterior foi resolvido. Entretanto, um novo erro foi lançado: `Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch`). Neste ponto descobri que o Heroku designa dinamicamente as portas para as aplicações. Assim, o código `app.listen(3000)` foi alterado para `app.listen(process.env.PORT || 3000)`.

### **Vídeo etapa 3: https://youtu.be/5QFgQfM3Gog**
### **Vídeo etapa 4: https://youtu.be/tjvHG5TXkIU**

---

## Tela: Tela de Seleção de Idiomas
> - Responsável: Pedro von der Heide Souza
> - Situação: Em desenvolvimento
> - Repositório (Expo): https://snack.expo.dev/@pedrovdh/recruta-ti

### **Screenshots:**
![image](https://user-images.githubusercontent.com/83302547/172074516-80d43b1e-950e-409e-8a5e-03828dc7fbe3.png)

### Observação: Não sei o motivo da tela ter ficado azul quando é utilizada pelo Android no Expo. No web, segue as mesmas cores do restante da aplicação.

### Descrição:

Criação da tela de Idiomas, que tem como função disponibilizar diversos idiomas e níveis no Idioma para inserção na página de perfil do profissional.

### **Problemas encontrados:**
- Corroboro com o que foi dito acima pelo Rodrigo.
- Encontrei dificuldades em visualizar a tela em que estou desenvolvendo (caso existam outras) sem que seja chamada por um botão em uma outra página. Acho que deveria ter a possibilidade de escolher qual tela você quer visualizar enquanto desenvolve.
- Dificuldade em desenvolver em conjunto. Não temos a possibilidade de ter um repositório único no expo que várias pessoas possam alterar e manter as alterações nesse repositório expo. Temos a possibilidade de fazer isso no git, mas pode causar grandes dificuldades no momento da mescla.
- Os demais problemas são comuns para quem está aprendendo uma nova linguagem e sofre com problemas de sintaxe.

### **Trecho de Código:**
```Javascript
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import { Searchbar } from 'react-native-paper'; 
import { View } from 'react-native'; 
import { Button } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';

import Search from '../components/Search';

const Idiomas = () => {
  const [value, setValue] = React.useState('first');
  const [searchQuery, setSearchQuery] = React.useState('');


  const onChangeSearch = query => setSearchQuery(query);
  return (
  <Container>  
  <Header>
  </Header>
  <Body>
 <Search/>
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Inglês" value="first" />
      <RadioButton.Item label="Espanhol" value="second" />
      <RadioButton.Item label="Francês" value="third" />
      <RadioButton.Item label="Alemão" value="fourth" />
      <RadioButton.Item label="Italiano" value="fifth" />
    </RadioButton.Group>
      <Button mode="contained" onPress={() => console.log('Salvar')}>
    Salvar
  </Button>
    </Body>
    </Container>   
  );  
};

export default Idiomas;
```


### **Próximos Passos:**
Aprimorar o desenvolvimento da tela, criando a possibilidade de inserção de idiomas, escolha de idioma e possibilidade definir o nível de domínio dos idiomas selecionados.


### **Video: [Link]https://youtu.be/SyPvJEba-28**

---


## Telas: Caixa de Entrada e Mensagens
> - Responsável: Vera Lúcia Gonçalves Almeida
> - Situação: Em desenvolvimento
> - Repositório (Expo): https://snack.expo.dev/@vera.almeida/caixa-de-mensagem

### **Screenshots:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-recruta-ti/blob/main/docs/img/Caixa%20de%20mensagens.png)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-recruta-ti/blob/main/docs/img/Tela%20de%20mensagens_02.png)

### Descrição:

Criação da tela de Mensagens, que tem como função disponibilizar um canal de comunicação entre o Recrutador e o Profissional de seu interesse e para a resposta do Profissional para o Recrutador.

### **Problemas encontrados:**
- Conforme o Pedro e o Rodrigo, também concordo com o que disseram (deixo a copia do texto deles)
- Encontrei dificuldades em visualizar a tela em que estou desenvolvendo (caso existam outras) sem que seja chamada por um botão em uma outra página. Acho que deveria ter a possibilidade de escolher qual tela você quer visualizar enquanto desenvolve.
- Dificuldade em desenvolver em conjunto. Não temos a possibilidade de ter um repositório único no expo que várias pessoas possam alterar e manter as alterações nesse repositório expo. Temos a possibilidade de fazer isso no git, mas pode causar grandes dificuldades no momento da mescla.
- Os demais problemas são comuns para quem está aprendendo uma nova linguagem e sofre com problemas de sintaxe.
- Devido ao meu tempo curto, tornou mais difícil o entendimento.

### **Trecho de Código:**
```Javascript
import React, { useState } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Appbar, TextInput, Button, Text} from 'react-native-paper';

import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';
import Logo from '../components/Logo';

const App = () => {
const [mensagens, setMensagens] = React.useState("");
const [profissional, setProfissional] = React.useState("");

const Mensagens = () =>{
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

}
  return (

    <Container>
      <Header title={'Mensagens'} />
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

export default App;
```


### **Próximos Passos:**
Aprimorar as funcionalidades.


### **Video: [https://screenrec.com/share/ZNnm9ah83V**

## Tela: Login e Registro do recrutador
> - Responsável: Pedro Henrique Pinto de Lacerda
> - Situação: Em desenvolvimento
> - Repositório (GitHub): https://github.com/pedrohplacerda/recruta-ti

### Descrição:

Criação da tela de login e registro do recrutador dentro da platoforma

### **Problemas encontrados:**
- Dificuldade em desenvolver em conjunto. Não temos a possibilidade de ter um repositório único no expo que várias pessoas possam alterar e manter as alterações nesse repositório expo. Temos a possibilidade de fazer isso no git, mas pode causar grandes dificuldades no momento da mescla.Os demais problemas são comuns para quem está aprendendo uma nova linguagem e sofre com problemas de sintaxe.
- Devido ao meu tempo curto, tornou mais difícil o entendimento.

### **Trecho de Código:**
```Javascript
const App = () => {

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <Container>
      <Header title={"Recruta-TI"} />
      <Image style={styles.logo}
        source={require('../recruta-ti/assets/icon.png')}
      />
      <Text style={styles.text}>
        Recrutador, Seja Bem Vindo (a)!
      </Text>
      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Input
          label="Senha"
          value={senha}
          onChangeText={senha => setSenha(senha)}
        />
        <Text style={styles.text}>
          Esqueci minha senha
        </Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'normal'
  },
  logo: {
    width: 66,
    height: 58,
    alignContent: 'center'
  }
});

export default App;
```


### **Próximos Passos:**

Implementar as funções de navegação e deixar os botões funcionais, além de melhorar o design conforme o figma.

### **Video: [Link]https://youtu.be/_sFVdyGxv7U**


## Consumo API do GitHUb
> - Responsável: Adilson Antônio Ferreira Júnior
> - Situação: Em desenvolvimento
> - Repositório (EXPO): https://snack.expo.dev/@adilsonjunior/84762f

### Descrição:

Consumir a API do GitHub para demonstrar na tela os dados do usuário.

### **Problemas encontrados:**
- Dificuldade em desenvolver em conjunto. Não temos a possibilidade de ter um repositório único no expo que várias pessoas possam alterar e manter as alterações nesse repositório expo. Temos a possibilidade de fazer isso no git, mas pode causar grandes dificuldades no momento da mescla.
- Dificuldades no desenvolvimento do código para atingir o resultado. Em alguns momentos, no programa EXPO, o nosso aplicativo não funcionava e algumas importações apresentavam erros mesmo utilizando exemplos do código da aula do professor Kléber e outros da internet.

### **Trecho de Código:**
```Javascript
import React, { useEffect, useState } from "react";
import api from "../services/api.git";
import Input from '../components/Input';

export default function App() {
  const [user, setUser] = useState();
  const [userGit, setUserGit] = useState();

  useEffect(() => {
    api
      .get(userGit)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  });

  return (
    <div className="App">
      <Input
          label="Usuário GitHub"
          value={userGit}
          onChangeText={(text) => setUserGit(text)}
        />
      <p>Nome: {user?.name}</p>
      <p>Usuário: {user?.login}</p>
      <p>Repositório: {user?.repos_url}</p>
      <p>Quantidade de Repositórios: {user?.public_repos}</p>
    </div>
  );
}
```
```Javascript
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
});

export default api;

```

### **Próximos Passos:**

Melhorar o código de maneira funcional e a apresentação na tela do aplicativo.

### **Video: [Link]https://youtu.be/8u_faHvA9Vs**


## Tela: Login e Registro do recrutador + caixa de entrada do recrutador + pesquisa de profissionais
> - Responsável: Pedro Henrique Pinto de Lacerda
> - Situação: Em desenvolvimento
> - Repositório (GitHub): https://github.com/pedrohplacerda/recruta-ti

### Descrição:

Criação da tela de login e registro do recrutador dentro da platoforma, além da caixa de entrada do recrutador e pesquisa de profissionais.

### **Problemas encontrados:**
- Dificuldade em desenvolver em conjunto. Não temos a possibilidade de ter um repositório único no expo que várias pessoas possam alterar e manter as alterações nesse repositório expo. Temos a possibilidade de fazer isso no git, mas pode causar grandes dificuldades no momento da mescla.Os demais problemas são comuns para quem está aprendendo uma nova linguagem e sofre com problemas de sintaxe.
- Devido a meu emprego me consumir bastante tempo, eu não tenho conseguido me reunir com meus colegas como gostaria.

### **Trecho de Código:**
- Trecho do código da tela de login do recrutador
```Javascript
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const LoginRecrutador = () => {

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <Container>
      <Header title={"Recruta-TI"} />
      <Image style={styles.logo}
      />
      <Text style={styles.text}>
        Recrutador, Seja Bem Vindo (a)!
      </Text>
      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Input
          label="Senha"
          value={senha}
          onChangeText={senha => setSenha(senha)}
        />
        <Text style={styles.text}>
          Esqueci minha senha
        </Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
        <Text style={styles.text}>
          Ainda não possui cadastro? Clique aqui.
        </Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'normal'
  },
  logo: {
    width: 66,
    height: 58,
    alignContent: 'center'
  }
});

export default LoginRecrutador;
```

### **Trecho de Código:**
- Trecho do código da tela de home onde fica os botões de navegação.
```Javascript
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CaixaDeEntrada from './CaixaDeEntrada';
import LoginRecrutador from './LoginRecrutador'
import PerfilRecrutador from './PerfilRecrutador';
import PesquisarProfissionais from './PesquisarProfissionais';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'login', title: 'Fazer login', icon: 'login' },
    { key: 'conta', title: 'Conta', icon: 'account' },
    { key: 'pesquisar', title: 'Pesquisar', icon: 'search-web' },
    { key: 'caixaDeEntrada', title: 'Caixa de entrada', icon: 'email-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    login: LoginRecrutador,
    conta: PerfilRecrutador,
    pesquisar: PesquisarProfissionais,
    caixaDeEntrada: CaixaDeEntrada
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
```


### **Screenshots:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-recruta-ti/blob/main/docs/img/LoginRecrutador.jpg)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-recruta-ti/blob/main/docs/img/PesquisarProfissionais.jpg)




### **Próximos Passos:**

Melhorar as funções de navegação. Implementar melhor o design de cada tela e também as telas de perfil do recrutador e caixa de entrada. 

### **Video: [Link]https://youtu.be/vS7NwiZfDzI**

