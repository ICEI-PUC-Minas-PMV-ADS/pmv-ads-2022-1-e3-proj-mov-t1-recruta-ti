# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

## Telas: Login e Registro (RF-001)
- Responsável: Rodrigo Lobenwein
- Situação: concluído
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

### **Video: https://youtu.be/5QFgQfM3Gog**

---

## Tela: 
> - Responsável: 
> - Situação: 
> - Repositório (Expo):

### Descrição:

### **Video: [Link]**

---