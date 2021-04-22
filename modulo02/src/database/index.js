import Sequelize from 'Sequelize';

import User from '../app/models';
import databaseConfig from '../../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }
  //Método init faz a conexão e carrega models.
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
