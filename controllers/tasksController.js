const tasksModel = require("../models/tasksModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksModel.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addTasks = async (req, res) => {
  try {
    const { title, description } = req.body;
    const addTask = await tasksModel.createTasks(title, description);
    res.status(201).json(addTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const delTask = await tasksModel.deleteTasks(req.body);

    res.status(201).json(req.body);
  } catch {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllTasks, addTasks, deleteTask };
