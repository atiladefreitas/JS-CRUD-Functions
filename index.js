const express = require('express');

const server = express();

server.use(express.json()); // função

const register = ['Camisa', 'Calça', 'Sapato'];

// creat read update delete

// retorna um produto
server.get('/register/:index', (req, res) => {
    const { index } = req.params;

    return res.json(register[index]);
});

// retornar todos os produtos
server.get('/register', (req, res) => {
    return res.json(register)
})

// criar um novo produto
server.post('/register', (req, res) => {
    const { name } = req.body;
    register.push(name);

    return res.json(register);
});

// atualizar um produto
server.put('/register/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    register[index] = name;

    return res.json(register);  
});

// deletar um produto
server.delete('/register/:index', (req, res) => {
    const { index } = req.params;

    register.splice(index, 1);
    return res.json({ message: "O produto foi deletado" });
});


server.listen(3000);
