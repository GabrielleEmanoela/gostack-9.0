//importando apenas o router
import { Router }  from 'express' ;
const routes = new Router();


// criando rota get.
routes.get('/', (req, res) => {
    return res.json({ message: 'Hello world' })
})
export default  routes; //exportando minhas rotas.