## Questões de Avaliação

1. No contexto do desenvolvimento colaborativo de software, a integração de boas práticas do Git, do Gitflow e dos Conventional Commits é fundamental para promover um processo de desenvolvimento coeso e eficiente. O Git, um sistema de controle de versão distribuído, aliado ao Gitflow, uma estratégia de fluxo de trabalho baseada em branches, e aos Conventional Commits, um estilo de mensagem de commit padronizado, oferecem uma estrutura sólida para gerenciar o ciclo de vida do código-fonte em equipes de desenvolvimento.

Considerando as boas práticas do Git, do Gitflow e dos Conventional Commits, analise as afirmações a seguir:

I. O Gitflow é uma metodologia que propõe um modelo de fluxo de trabalho baseado em branches, e deve incluir obrigatoriamente branches principais como "main" e "develop", além de branches de suporte como "feature", "release" e "hotfix".  
II. As branches do tipo "feature" no Gitflow são utilizadas para o desenvolvimento de novas funcionalidades ou melhorias no código-fonte, mantendo essas alterações isoladas até estarem prontas para integração na branch "develop" ou “main”, dependendo da escolha do time.  
III. Os Conventional Commits são uma convenção para padronizar as mensagens de commit, o que facilita a compreensão das alterações realizadas no código-fonte, auxiliando na revisão de código e na geração de históricos de alterações claros e informativos.

Com base nas afirmações acima, assinale a alternativa correta:

- A) Apenas a afirmação I está correta.  
- B) Apenas a afirmação II está correta.  
- C) Apenas a afirmação III está correta.  
- D) As afirmações I e II estão corretas.  
- E) As afirmações II e III estão corretas.


2. O desenvolvimento de aplicações web modernas frequentemente envolve o uso de arquiteturas e tecnologias específicas, como requisições HTTP, APIs RESTful, arquitetura MVC e frameworks como Sails.js. Considere as afirmativas a seguir:

I. As requisições HTTP são protocolos de comunicação utilizados para transferir dados entre um cliente e um servidor web. Elas incluem métodos como GET, POST, PUT e DELETE, que representam diferentes tipos de operações sobre recursos.  
II. As APIs RESTful não precisam seguir um padrão de design específico uma vez que utilizam URIs (Uniform Resource Identifiers) para representar recursos e os métodos HTTP para operar sobre esses recursos de maneira uniforme e previsível.  
III. Na arquitetura MVC (Model-View-Controller), o Model não está envolvido na representação da estrutura dos dados nem na lógica de negócios; em vez disso, é responsável pela interação entre o usuário e a aplicação.  
IV. O Sails.js é um framework MVC para Node.js, projetado para simplificar o desenvolvimento de aplicativos web e APIs RESTful, oferecendo recursos como geração automática de rotas e configuração flexível que permitem uma implementação ágil e eficiente.

É correto APENAS o que se afirma em:

- A) I e II.  
- B) II e III.  
- C) I e IV.  
- D) II, III e IV.  
- E) I, III e IV.

2. Em um projeto de desenvolvimento de banco de dados PostgreSQL para uma aplicação de gerenciamento de vendas, a equipe de desenvolvimento precisa realizar consultas complexas que envolvem a junção de tabelas para obter informações detalhadas sobre vendas e clientes.

Qual das seguintes opções descreve corretamente as características e usos de INNER JOIN, RIGHT JOIN e LEFT JOIN?

- A) INNER JOIN retorna todos os registros da tabela da esquerda; RIGHT JOIN retorna apenas os registros com correspondência em ambas as tabelas; LEFT JOIN retorna todos os registros da direita.  
- B) INNER JOIN retorna registros com correspondência em ambas as tabelas; RIGHT JOIN retorna todos os registros da direita; LEFT JOIN retorna todos os da esquerda.  
- C) INNER JOIN retorna todos os registros da esquerda; RIGHT JOIN retorna todos da direita; LEFT JOIN retorna apenas registros com correspondência.  
- D) INNER JOIN retorna apenas os registros com correspondência em ambas as tabelas; RIGHT JOIN retorna todos os registros da direita com correspondência; LEFT JOIN retorna todos os da esquerda com correspondência.  
- E) INNER JOIN retorna todos os registros da esquerda; RIGHT JOIN retorna todos da direita com correspondência; LEFT JOIN retorna apenas os registros com correspondência.

3. Você precisa criar um relatório que conecte alunos a seus professores orientadores. Essa relação está codificada em uma nova tabela `orientacoes`, que deverá incluir `id_aluno` e `id_professor`. Qual das seguintes opções melhor descreve o comando SQL para criar a tabela `orientacoes` de forma que ela estabeleça corretamente as chaves estrangeiras?

- A) `CREATE TABLE orientacoes (id_aluno INTEGER, id_professor INTEGER, FOREIGN KEY (id_aluno) REFERENCES alunos, FOREIGN KEY (id_professor) REFERENCES professores);`  
- B) `CREATE TABLE orientacoes (id_aluno INTEGER PRIMARY KEY, id_professor INTEGER PRIMARY KEY, FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno), FOREIGN KEY (id_professor) REFERENCES professores(id_professor));`  
- C) `CREATE TABLE orientacoes (id_aluno INTEGER, id_professor INTEGER, PRIMARY KEY (id_aluno, id_professor), FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno), FOREIGN KEY (id_professor) REFERENCES professores(id_professor));`  
- D) `CREATE TABLE orientacoes (id_orientacao SERIAL PRIMARY KEY, id_aluno INTEGER, id_professor INTEGER, FOREIGN KEY (id_aluno) REFERENCES alunos, FOREIGN KEY (id_professor) REFERENCES professores);`  
- E) `CREATE TABLE orientacoes (id_orientacao SERIAL PRIMARY KEY, id_aluno INTEGER, id_professor INTEGER, FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno), FOREIGN KEY (id_professor) REFERENCES professores(id_professor));`


3. Avalie as seguintes asserções:

I - Um FULL JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas envolvidas na junção.  
**PORQUE**  
II - O LEFT JOIN, também conhecido como LEFT OUTER JOIN, retorna todos os registros da tabela à esquerda, junto com os registros correspondentes da tabela à direita. Se não houver correspondência, os valores NULL são inseridos para as colunas da tabela à direita.

A respeito dessas asserções, assinale a alternativa correta:

- A) As asserções I e II são proposições verdadeiras, mas a II não justifica a I.  
- B) As asserções I e II são proposições verdadeiras e a II justifica a I.  
- C) A asserção I é uma proposição verdadeira e a II, falsa.  
- D) A asserção I é uma proposição falsa e a II, verdadeira.  
- E) As asserções I e II são proposições falsas.

4. Durante a criação de um sistema de login para uma aplicação web, um estudante decidiu configurar o servidor para utilizar apenas o protocolo HTTP. Após testes, percebeu que os dados de login estavam sendo transmitidos de forma insegura, permitindo a interceptação por terceiros.

Considerando esse cenário, qual alternativa representa a melhor solução para proteger os dados trafegados entre cliente e servidor?

A) Substituir o protocolo HTTP pelo protocolo FTP, que possui autenticação nativa.
B) Adicionar criptografia manual nos dados e manter o protocolo HTTP.
C) Utilizar o protocolo HTTPS, que incorpora segurança através de criptografia SSL/TLS.
D) Trocar o navegador do usuário para um que possua firewall embutido.
E) Usar apenas métodos HTTP como POST e DELETE, pois são mais seguros por padrão.

5. Ao desenvolver um formulário de cadastro de usuários, uma equipe de programadores utilizou o método GET para enviar os dados do formulário ao servidor.

Qual dos problemas abaixo pode ocorrer como consequência direta dessa escolha?

A) O servidor não conseguirá receber os dados corretamente.
B) Os dados do formulário não poderão ser armazenados no banco de dados.
C) Os dados enviados pelo formulário poderão aparecer na URL, comprometendo a segurança.
D) O navegador impedirá que a requisição seja feita com esse método.
E) A requisição falhará, pois GET não é aceito por servidores modernos.

6. Considere o seguinte cenário:

Um usuário acessa um site de e-commerce. Ele vê a lista de produtos disponíveis, filtra os produtos por categoria e faz login para realizar uma compra.

Qual parte da arquitetura web é responsável por processar o login do usuário e verificar se ele está registrado corretamente?

A) Front-end
B) Banco de Dados
C) Servidor DNS
D) Back-end
E) WebSocket

7. Durante a criação de uma rede social, a equipe de desenvolvimento optou por usar o MongoDB em vez do PostgreSQL. A justificativa foi a necessidade de maior flexibilidade nos tipos de dados armazenados, como listas, objetos e imagens embutidas em documentos.

Com base nessa decisão, pode-se afirmar que:

A) A equipe optou por um banco de dados relacional, por causa da flexibilidade.
B) MongoDB é uma alternativa baseada em grafos, ideal para redes sociais.
C) PostgreSQL é a única opção viável para armazenar dados não estruturados.
D) A equipe escolheu um banco NoSQL, adequado para dados sem estrutura fixa.
E) A decisão compromete a segurança, pois bancos NoSQL não possuem autenticação.

8. Durante o desenvolvimento de um novo recurso em um projeto colaborativo, um desenvolvedor criou uma branch diretamente a partir da Main, realizou os commits e finalizou o desenvolvimento. Ao enviar o código para o repositório remoto, o time identificou que a Main foi modificada indevidamente.

De acordo com as boas práticas do Git Flow, o desenvolvedor deveria:

A) Ter criado uma branch Feature a partir da Develop.
B) Ter feito commits diretamente na Main, como ele fez.
C) Ter criado a Feature a partir da Hotfix, pois ela é usada para tudo.
D) Ter criado um Pull Request da Develop para a Feature.
E) Ter realizado o trabalho todo na Main e, só depois, movido para a Develop.

9. Um programador implementou a seguinte função:

```javascript
function buscarUsuario(id) {
  return database.findUserById(id);
}
```

10. Considere a tabela alunos(id, nome, curso). Um desenvolvedor deseja atualizar o nome do aluno com ID 10 para "Carlos Souza".

Qual comando SQL realiza corretamente essa operação?

A) `SELECT nome = 'Carlos Souza' FROM alunos WHERE id = 10;`
B) `UPDATE alunos SET nome = 'Carlos Souza' WHERE id = 10;`
C) `UPDATE alunos WHERE id = 10 SET nome = 'Carlos Souza';`
D) `INSERT INTO alunos (nome) VALUES ('Carlos Souza') WHERE id = 10;`
E) `DELETE nome FROM alunos WHERE id = 10 AND nome = 'Carlos Souza';`

11. Considere as tabelas clientes e pedidos. O gerente de vendas quer visualizar todos os clientes, mesmo que alguns não tenham feito pedidos ainda.

Qual tipo de JOIN deve ser utilizado para atender a essa demanda?

A) INNER JOIN
B) RIGHT JOIN
C) LEFT JOIN
D) FULL JOIN
E) CROSS JOIN

12. Em um projeto web, um desenvolvedor precisa instalar a biblioteca express, que facilita a criação de APIs em Node.js.

Qual ferramenta ele deve utilizar para realizar essa instalação?

A) GitHub
B) Vercel
C) Supabase
D) npm
E) SQL

13. Um time de desenvolvedores está criando um sistema de chat em tempo real. Eles precisam de um protocolo que mantenha a conexão aberta entre cliente e servidor para troca constante de mensagens sem recarregar a página.

Qual protocolo atende melhor a essa necessidade?

A) HTTP
B) FTP
C) REST
D) HTTPS
E) WebSocket

14. Uma equipe de desenvolvimento está implementando uma API RESTful para uma aplicação de gestão de livros. Durante o desenvolvimento, um dos integrantes propõe criar uma função no controller que faz uma consulta direta ao banco de dados com SQL puro, sem utilizar os models.

Diante disso, assinale a alternativa correta em relação às boas práticas da arquitetura MVC e RESTful:

A) A proposta está correta, pois o controller é responsável por toda a lógica da aplicação, incluindo o acesso direto ao banco de dados.
B) Essa abordagem fere o padrão MVC, pois as operações de acesso ao banco devem ser realizadas exclusivamente pelos Models.
C) O correto seria realizar a consulta diretamente nas rotas, uma vez que elas recebem a requisição HTTP.
D) O uso de SQL puro no controller melhora a performance e deve ser adotado sempre que possível.
E) Controllers e models podem ser fundidos em um único arquivo para facilitar a manutenção do código.

15. Considere a seguinte definição retirada do código de uma aplicação:

```javascript
router.get('/usuarios', userController.getAllUsers);
```

No contexto de APIs RESTful e arquitetura MVC, essa linha representa:

A) Uma chamada ao banco de dados que renderiza diretamente a View.
B) A definição de um endpoint que faz uma requisição HTTP do tipo GET para a rota /usuarios, acionando uma função no controller.
C) Um comando JavaScript usado para criar tabelas no banco de dados.
D) Uma função do Model que processa o pedido do cliente e retorna os dados.
E) Uma instrução de renderização direta no front-end via JavaScript.

16. Um desenvolvedor júnior está confuso sobre onde implementar a lógica que busca todos os usuários cadastrados no banco de dados. Segundo a arquitetura MVC, em qual camada essa lógica deve ser implementada?

A) View, pois é responsável por mostrar os dados para o usuário.
B) Controller, pois é responsável por buscar e retornar diretamente os dados do banco.
C) Model, pois é o componente responsável por toda manipulação de dados e lógica de acesso ao banco. 
D) Route, já que ela define qual informação será processada.
E) Nenhuma das alternativas, pois a lógica deve ser implementada no servidor de hospedagem.

17. Em uma aplicação utilizando arquitetura MVC e API RESTful, o papel do controller pode ser corretamente descrito como:

A) Fornecer a interface gráfica para o usuário final.
B) Atuar como intermediário entre as rotas e os models, processando as requisições e retornando respostas ao cliente.
C) Definir a estrutura das tabelas no banco de dados.
D) Criar endpoints e gerenciar pacotes no Node.js via npm.
E) Armazenar os dados da aplicação e realizar consultas diretas ao banco.

18. Considere a analogia de um restaurante para explicar a arquitetura MVC:

- View → Restaurante (o que o cliente vê)

- Rota → Cardápio (opções que podem ser pedidas)

- Controller → Garçom (leva o pedido)

- Model → Chef (prepara a comida)

- Banco de dados → Ingredientes

Com base nessa analogia, ao fazer uma requisição para obter todos os usuários, qual das opções abaixo representa corretamente a ordem do fluxo da requisição?

A) Ingredientes → Garçom → Restaurante → Cardápio → Chef
B) Cardápio → Restaurante → Chef → Garçom → Ingredientes
C) Restaurante → Cardápio → Garçom → Chef → Ingredientes
D) Garçom → Cardápio → Ingredientes → Restaurante → Chef
E) Restaurante → Ingredientes → Garçom → Cardápio → Chef

