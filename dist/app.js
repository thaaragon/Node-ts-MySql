"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
//Configurar dontenv
dotenv_1.default.config();
const server = new server_1.default;
server.listen();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0RBQTRCO0FBQzVCLDZEQUFxQztBQUVyQyxvQkFBb0I7QUFDcEIsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUdmLE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQztBQUUxQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMifQ==