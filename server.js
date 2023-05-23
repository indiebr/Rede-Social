/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Pedro Henrique Pereira de Melo 2111562 
DATA 21/05/2023*/


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analisar o corpo das solicitações como JSON
app.use(bodyParser.json());

// Array para armazenar os dados
let data = [];

// Rota GET para recuperar todos os itens
app.get('/api/usuarios', (req, res) => {
  res.json(data);
});

// Rota POST para criar um novo usuário
app.post('/api/usuarios', (req, res) => {
  const newUsuario = req.body;
  data.push(newUsuario);
  res.status(201).json(newUsuario);
});

// Rota PUT para atualizar um usuário existente
app.put('/api/usuarios/:id', (req, res) => {
  const usuarioId = req.params.id;
  const updatedUsuario = req.body;
  
  // Encontra o índice do usuário com o ID fornecido no array de dados
  const usuarioIndex = data.findIndex(usuario => usuario.id === usuarioId);
  
  if (usuarioIndex === -1) {
    res.status(404).json({ error: 'Usuario not found' });
  } else {
    // Atualiza o usuário no array de dados
    data[usuarioIndex] = { ...data[usuarioIndex], ...updatedUsuario};
    res.json(data[usuarioIndex]);
  }
});

// Rota DELETE para excluir um usuario
app.delete('/api/usuarios/:id', (req, res) => {
  const usuarioId = req.params.id;
  
  // Encontra o índice do usuário com o ID fornecido no array de dados
  const usuarioIndex = data.findIndex(usuario => usuario.id === usuarioId);
  
  if (usuarioIndex === -1) {
    res.status(404).json({ error: 'Usuario not found' });
  } else {
    // Remove o usuário do array de dados
    const deletedUsuario = data[usuarioIndex];
    data.splice(usuarioIndex, 1);
    res.json(deletedUsuario);
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}`);
});
