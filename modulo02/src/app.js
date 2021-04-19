//Configurando rota.

//importando
const express = require('express');
const routes = require('./routes');

//definindo clase do app
class App {
    //toda vez que minha classe for chamada o constructore vai ser executad automaticamente.
    constructor() {
        //definindo varivel para receber express
        this.server = express();
        this.routes();
        this.middlewares();
    }

    middlewares() {
        //A partir desse momento estou definindo que minha rota vai ser do formato jason.
        this.server.use(express.json())
    }
    routes() {
        this.server.use(routes)
    }
}

module.exports= new App(server);