# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|Caso de teste | TC-001  |
|------|------------|
|Item de Teste | Login Padrão |
|Requisito | RF-001 |
|Especificações de entrada | Email: rodrigo.lobenwein@sga.pucminas.br Senha: 123456
|Procedimento | Inserir o Email na área "Email", Inserir a senha na área "Senha", Clicar em "Login" |
|Resultado Esperado | Visualização da Tela "Perfil do Profissional" |

|Caso de teste | TC-002  |
|------|------------|
|Item de Teste | Login recusado 
|Requisito | RF-001 |
|Especificações de entrada | Email: rodrigo@sga.pucminas.br Senha: 123456
|Procedimento | Inserir o Email na área "Email", Inserir a senha na área "Senha", Clicar em "Login" |
|Resultado Esperado | Visualização da mensagem de alerta "Usuário/senha inválidos " |

|Caso de teste | TC-003  |
|------|------------|
|Item de Teste | Login recusado 
|Requisito | RF-001 |
|Especificações de entrada | Email: rodrigo.lobenwein@sga.pucminas.br Senha: 654321123456
|Procedimento | Inserir o Email na área "Email", Inserir a senha na área "Senha", Clicar em "Login" |
|Resultado Esperado | Visualização da mensagem de alerta "Usuário/senha inválidos " |

|Caso de teste | TC-004  |
|------|------------|
|Item de Teste | Registro padrão 
|Requisito | RF-001 |
|Especificações de entrada | Nome: Fernando Resende Email: fernando@gmail.com Senha: 123456
|Procedimento | Inserir os dados de entrada nas área correspondentes |
|Resultado Esperado | Visualização da mensagem de alerta "Usuário cadastrado com sucesso!" |

|Caso de teste | TC-005  |
|------|------------|
|Item de Teste | Registro com email repetido 
|Requisito | RF-001 |
|Especificações de entrada | Nome: Fernando Andrade Email: fernando@gmail.com Senha: 123456
|Procedimento | Inserir os dados de entrada nas área correspondentes |
|Resultado Esperado | Visualização da mensagem de alerta "Usuário não foi cadastrado! Tente novamente mais tarde" |

