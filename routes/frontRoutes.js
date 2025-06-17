// Importa o módulo Express, usado para criar o roteador
const express = require("express");

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Importa o módulo nativo do Node.js para lidar com caminhos de diretórios
const path = require("path");

// Define uma rota GET para a raiz do site "/"
router.get("/", (req, res) => {
  // Renderiza a página index.ejs localizada na pasta ../views
  // Passa para a view dois dados: pageTitle e content
  res.render(path.join(__dirname, "../views/pages/index"), {
    pageTitle: "Página Inicial",
    content: path.join(__dirname, "../views/pages/index"),
  });
});

module.exports = router;
