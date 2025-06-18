---

## ✅ Estrutura AAA em testes unitários

**AAA = Arrange, Act, Assert**

* **Arrange**: configure o ambiente e dados necessários para o teste.
* **Act**: execute a função que você quer testar.
* **Assert**: verifique se o resultado é o esperado.

---

## ✅ Exemplo prático com Jest no padrão MVC

Vamos supor que temos essa função no **model**:

```js
// src/models/userModel.js
const db = require("../config/db");

class User {
  static async getById(id) {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }
}

module.exports = User;
```

---

## ✅ Teste usando AAA com Jest

```js
// tests/userModel.test.js
const User = require("../src/models/userModel");
const db = require("../src/config/db");

jest.mock("../src/config/db"); // Simula o módulo db

describe("User.getById", () => {
  test("deve retornar o usuário correspondente ao ID", async () => {
    // 🔹 Arrange
    const mockUser = { id: 1, name: "João", email: "joao@email.com" };
    db.query.mockResolvedValue({ rows: [mockUser] });

    // 🔹 Act
    const result = await User.getById(1);

    // 🔹 Assert
    expect(db.query).toHaveBeenCalledWith("SELECT * FROM users WHERE id = $1", [
      1,
    ]);
    expect(result).toEqual(mockUser);
  });
});
```

---

## ✅ Outro exemplo com controller

```js
// src/controllers/userController.js
const User = require("../models/userModel");

exports.getUser = async (req, res) => {
  const user = await User.getById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};
```

```js
// tests/userController.test.js
const { getUser } = require("../src/controllers/userController");
const User = require("../src/models/userModel");

jest.mock("../src/models/userModel");

describe("getUser (controller)", () => {
  test("deve retornar 200 com o usuário encontrado", async () => {
    // 🔹 Arrange
    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
    const mockUser = { id: 1, name: "Maria" };
    User.getById.mockResolvedValue(mockUser);

    // 🔹 Act
    await getUser(req, res);

    // 🔹 Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });
});
```

---
