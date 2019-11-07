import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';

import databaseConfig from '../config/database';
import Plan from '../app/models/Plan';

const models = [User, Student, Plan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
