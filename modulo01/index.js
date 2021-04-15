const express = require('express');


const server = express();

const users = ['Gabrielle', 'Emanoela', 'Eduardo'];

server.get('/users/:index', (req, res) => {

    const { index } = req.params;

    return res.json(users[index]);
});
 
server.listen(3005);
