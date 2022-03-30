
# Metodologia

## Relação de Ambientes de Trabalho

O desenvolvimento deste trabalho ocorrerá com o auxílio de diversas ferramentas, que têm como objetivo principal a organização das tarefas e do fluxo do trabalho. A definição das ferramentas e o seu propósito são descritas a seguir.

>* Repositório de código fonte: `GitHub`
>* Documentos do projeto: `Github`
>* Interface e Wireframes: `Figma`
>* Diagramas: `LucidChart`
>* Gerenciamento do projeto: `GitHub`


## Controle de Versão

A gestão do código fonte deste trabalho será feita segundo o modelo GitFlow, um modelo “robusto para gerenciar projetos mais complexos ou de grande porte” (Vietro, 2015). O funcionamento do GitFlow é semelhante a uma árvore, em que há um tronco e diversas ramificações, que são os galhos. O tronco, ou branch (do inglês, “galho”) principal, é chamado de Master, e contém o código oficial, histórico de entregas e também é usado para liberação para o cliente.

Partindo do branch master, existem diversos outros tipos de branches:

- `Hotfix` ou `maintenance` branch: usado para correções rápidas de erros;
- `Develop`: é o branch principal para o desenvolvimento, também utilizado para guardar o histórico do projeto. É neste branch que são integradas todas as novas funcionalidades (feature branches);
- `Feature` branch: ao iniciar o desenvolvimento de uma nova funcionalidade, esta deve ter seu próprio branch que, posteriormente, serão integradas no branch develop;
- `Release` branch: é a branch para entrega, desenvolvida quando as funcionalidades do ciclo estão prontas. Deve ser integrada com as branches Master e Develop;
Uma representação deste modelo pode ser vista na figura 2.

![Figura 2 – Fluxo de trabalho do modelo GitFlow (Vietro, 2015)](img/Gitflow.png)


Para utilização deste modelo, o repositório será hospedado no GitHub, para que todos os desenvolvedores do trabalho tenham acesso. Para facilitar a criação das branches e a integração de todas, será utilizado o GitHub Desktop.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

## Gerenciamento de Projeto

O gerenciamento do projeto e a divisão das tarefas utilizará o Scrum, método ágil largamente utilizado no desenvolvimento de aplicações por empresas como Google, Amazon e Salesforce.com (SUTHERLAND, JEFF; SUTHERLAND, 2019). 

O Scrum, de forma resumida, é uma metodologia que tem como objetivo o gerenciamento de projetos, proporcionando sua execução de forma rápida. O projeto é dividido em tarefas e estas compõem o chamado “backlog”. A pessoa da equipe que gerencia o backlog é o Product Owner, responsável pela visão do todo do produto e quem define as prioridades de cada tarefa. A gestão do tempo é realizada através dos sprints, que devem ter duração de uma a duas semanas – para este trabalho, serão realizados sprints de 1 semana – acompanhados pelas “reuniões diárias em pé”, ou “Scrum diário”, em que são respondidas três perguntas por todos da equipe:

>*	O que você fez ontem?
>*	O que você vai fazer hoje?
>*	Quais são os obstáculos?

O Scrum Master é o responsável pelo bom andamento da metodologia, treinando e eliminando fatores que reduzem o ritmo da equipe.

O Scrum é adequado para o trabalho com o GitFlow, já que as feature branches podem ser as tarefas de cada sprint; as hotfixes são as novas tarefas prioritárias no backlog; e as release features seriam a entrega de cada sprint.
Assim, a equipe será dividida da seguinte forma:

* Scrum Master:
* Product Owner: 

* Equipe de Desenvolvimento: 
    * Adilson Antônio Ferreira Junior
    * José Flávio Miranda 
    * Pedro Henrique Pinto de Lacerda
    * Pedro Von Der Heide Souza
    * Rodrigo Lobenwein
    * Vera Lúcia Gonçalves Almeida

### Quadro kanban

O quadro kanban do projeto também será feito no GitHub e pode ser acessado pelo link [link]

![Quadro Kanban](img/kanban.jpg)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código: Visual Studio Code
- Ferramentas de comunicação: WhatsApp, Teams
- Ferramentas de desenho de tela: Figma
- Editor de diagramas UML
    * StarUML (Esquema Relacional "pé de Galinha")
    * Draw.io (Diagrama Entidade-Relacionamento)
    * MS PowerPoint (Modelo Relacional)
    * InDesign (Diagrama de Fluxo de Dados)

O VS Code foi escolhido por ser uma solução gratuita, leve e versátil, além de possuir integração com o GitHub e GitHub Desktop, o que facilita o controle de versões e a gestão das branches.