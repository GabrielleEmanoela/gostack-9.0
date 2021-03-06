const express = require('express');

const server = express();
server.use(express.json());


const users = ['Gabrielle', 'Emanoela', 'Eduardo'];

server.use((req, res, next) => {
    console.time('Request');
    console.log(`Método ${req.method}; URL: ${req.url}`);
    next();
    console.timeEnd('Request')
});

function checkUserExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'User name is required' })
    }
    req.users = users;         
    return next;   
}

function checkUserInArray(req, res, next) {
    const users = users[req.params.index]
    if (!users) {
        return res.status(400).json({ error: 'User does not exists' })
    };
    return next;
}

server.get('/users/:index', checkUserInArray, (req, res) => {

    const { index } = req.params;

    return res.json(users[index]);
});

server.get('/users', (req, res) => {
    return res.json(users);
});

server.post('/users', checkUserExists, (req, res) => {
    const name = req.body;

    users.push(name)
    return res.json(users)

});

server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    users[index] = name;

    return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.send();
});

server.listen(3005);
