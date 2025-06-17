const express = require("express");
const router = express.Router();
const path = require("path");
const tasksController = require("../controllers/tasksController");

// Adicione outras rotas conforme necessário

router.get("/listar", tasksController.getAllTasks);

router.post("/adicionar", tasksController.addTasks);

router.delete("/deletar", tasksController.deleteTask);

module.exports = router;
