//importando apenas o router
const { Router } = require('express');
const routes = new Router();


// criando rota get.
router.get('/', (req, res) => {
    return res.json({ message: 'Hello world' })
})
module.exports = routes; //exportando minhas rotas.