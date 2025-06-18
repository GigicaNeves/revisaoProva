## ✅ 1. Instale o Jest no seu projeto

Se ainda não instalou, rode:

```bash
npm install --save-dev jest
```

Adicione ao seu `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

---

## ✅ 2. Estrutura típica do MVC

Seu projeto provavelmente tem uma estrutura como:

```
src/
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── services/
│   └── taskService.js
tests/
└── taskModel.test.js
```

---

## ✅ 3. Exemplo de função a ser testada

### `models/taskModel.js`:

```js
function soma(a, b) {
  return a + b;
}

module.exports = { soma };
```

---

## ✅ 4. Crie o teste correspondente

### `tests/taskModel.test.js`:

```js
const { soma } = require("../src/models/taskModel");

describe("Função soma", () => {
  test("Deve retornar a soma de dois números", () => {
    expect(soma(2, 3)).toBe(5);
  });

  test("Deve funcionar com números negativos", () => {
    expect(soma(-2, -3)).toBe(-5);
  });
});
```

---

## ✅ 5. Rodar os testes

Execute no terminal:

```bash
npm test
```

---

## ✅ 6. Dicas para testar seu código MVC

### Models:

- Teste funções de manipulação de dados (ex: validações, regras de negócio puras).
- Use mocks se o model interagir com banco de dados.

### Controllers:

- Teste apenas a lógica interna (ex: status, chamadas a métodos).
- Simule `req`, `res` com bibliotecas como `jest-mock` ou crie objetos manuais.

### Exemplo básico de controller:

```js
// controllers/taskController.js
const taskModel = require("../models/taskModel");

exports.getTask = (req, res) => {
  const task = taskModel.findById(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send("Not found");
  }
};
```

### Teste do controller:

```js
// tests/taskController.test.js
const { getTask } = require("../src/controllers/taskController");
const taskModel = require("../src/models/taskModel");

jest.mock("../src/models/taskModel"); // Mocka o model

describe("getTask", () => {
  test("Retorna 200 e o task", () => {
    const mockTask = { id: 1, title: "Tarefa" };
    taskModel.findById.mockReturnValue(mockTask);

    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    getTask(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTask);
  });
});
```

---
