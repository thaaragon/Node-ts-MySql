"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node-ts', 'root', 'root', {
    host: '127.0.0.1',
    password: 'password',
    port: 8889,
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RiL2Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBc0M7QUFFdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQ2hELElBQUksRUFBRSxXQUFXO0lBQ2pCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLE9BQU87SUFDaEIsZ0JBQWdCO0NBQ25CLENBQUMsQ0FBQztBQUVILGtCQUFlLEVBQUUsQ0FBQyJ9