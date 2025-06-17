// Carrega variáveis de ambiente do arquivo .env (ex: SUPABASE_URL, PORT, etc)
require("dotenv").config();

// Importa o framework Express para criar o servidor
const express = require("express");

// Cria uma instância da aplicação Express
const app = express();

// Importa o módulo de conexão com o banco de dados
const db = require("./config/db");

// Importa módulo nativo do Node.js para manipular caminhos
const path = require("path");

// Define o mecanismo de template como EJS (para renderizar HTML dinâmico)
app.set("view engine", "ejs");

// Define o diretório onde estão os arquivos de visualização (EJS)
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); // se quiser usar CSS futuramente

// Inicia a conexão com o banco de dados
db.connect()
  .then(() => {
    // Se conectar com sucesso, executa este bloco
    console.log("Conectado ao banco de dados PostgreSQL");

    // Middleware que permite interpretar o corpo das requisições em JSON
    app.use(express.json());

    // Importa as rotas da API relacionadas a tarefas
    const tasksRoutes = require("./routes/tasksRoutes");

    // Usa o conjunto de rotas de tarefas no caminho /tasks
    app.use("/tasks", tasksRoutes);

    // Importa as rotas do frontend (páginas EJS)
    const frontRoutes = require("./routes/frontRoutes");

    // Usa as rotas frontend na raiz (ex: GET /)
    app.use("/", frontRoutes);

    // Middleware para lidar com rotas não encontradas (erro 404)
    app.use((req, res, next) => {
      res.status(404).send("Página não encontrada");
    });

    // Middleware para lidar com erros internos do servidor (erro 500)
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Erro no servidor");
    });

    // Define a porta do servidor usando a variável de ambiente ou 8080 como padrão
    const PORT = process.env.PORT || 8080;

    // Inicia o servidor e exibe uma mensagem no console
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    // Em caso de erro na conexão com o banco, exibe mensagem de erro
    console.error("Erro ao conectar ao banco de dados:", err);
  });
