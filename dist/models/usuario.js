"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
});
exports.default = Usuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy91c3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLGtFQUFrQztBQUVsQyxNQUFNLE9BQU8sR0FBRyxvQkFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7SUFDakMsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUN6QjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FDekI7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO0tBQzFCO0NBRUosQ0FBQyxDQUFDO0FBRUgsa0JBQWUsT0FBTyxDQUFDIn0=