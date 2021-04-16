const express = require('express');

const server = express();
server.use(express.json());


const users = ['Gabrielle', 'Emanoela', 'Eduardo'];

server.get('/users/:index', (req, res) => {

    const { index } = req.params;

    return res.json(users[index]);
});

server.get('/users', (req, res) => {
    return res.json(users);
});
//Usando Request Body.
server.post('/users', (req, res) => {
    const name = req.body;

    users.push(name)
    return res.json(users)

});

server.listen(3005);
