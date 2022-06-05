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

|Caso de teste | TC-006 |
|------|------------|
|Item de Teste | Avaliação do tempo de resposta 
|Requisito | RNF-004 |
|Procedimento | Avaliar o tempo de resposta do servidor nos casos de teste TC-001 a TC-005 |
|Resultado Esperado | Tempo de resposta inferior a 5 segundos |

|Caso de teste | TC-007 |
|------|------------|
|Item de Teste | Campo de senha não deve mostrar a senha digitada 
|Requisito | RNF-002 |
|Procedimento | Verificar se os caracteres do campo senha estão ocultos  |
|Resultado Esperado | A senha não é exibida |

|Caso de teste | TC-008 |
|------|------------|
|Item de Teste | Criptografia da senha 
|Requisito | RNF-002 |
|Procedimento | Verificar se senha armazenada no banco de dados está criptografada  |
|Resultado Esperado | As senhas armazenadas estão criptografadas |
   
|Caso de teste | TC-009  |
|------|------------|
|Item de Teste | Escrever Mensagem |
|Requisito | RF-007 |
|Procedimento | Clicar no ícone no Lápis no Bottom Navigation, escolher profissional a ser contactado na label profissional, escrever mensagem na label mensagem, clicar em Enviar. |
|Resultado Esperado | Visualizar a notificação: "Mensagem enviada com sucesso". |

