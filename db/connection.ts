
import { Sequelize } from 'sequelize';

const db = new Sequelize('node-ts', 'root', 'root', {
    host: '127.0.0.1',
    password: 'password',
    port: 8889,
    dialect: 'mysql',
    //logging: false
});

export default db;