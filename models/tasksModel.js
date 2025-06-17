const db = require("../config/db");

const getAllTasks = async () => {
  try {
    const result = await db.query("SELECT * FROM tasks");
    return result.rows;
  } catch {}
};

const createTasks = async (title, description) => {
  try {
    const result = await db.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

const deleteTasks = async (id) => {
  try {
    const result = await db.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );
    // Retorna a tarefa excluída
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  deleteTasks,
};
