"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)(),
            this.port = process.env.PORT || '8000';
        this.dbConnection();
        //Middlewares
        this.middlewares();
        //Definir rutas
        this.routes();
    }
    //TODO: conectar bd
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('DB online');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura del body
        this.app.use(express_1.default.json());
        //carpeta pública
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en Puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUE2QztBQUU3QyxnRUFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUFrQztBQUVsQyxNQUFNLE1BQU07SUFRUjtRQUpRLGFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxlQUFlO1NBQzVCLENBQUE7UUFHRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsYUFBYTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixlQUFlO1FBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWxCLENBQUM7SUFFRCxtQkFBbUI7SUFFYixZQUFZOztZQUNkLElBQUc7Z0JBRUMsTUFBTSxvQkFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBRTNCO1lBQUEsT0FBTSxLQUFLLEVBQUM7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUU5RDtRQUNMLENBQUM7S0FBQTtJQUVELFdBQVc7UUFFUCxNQUFNO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBRSxDQUFDO1FBQ3RCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFFLENBQUM7UUFFOUIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLENBQUE7SUFDM0MsQ0FBQztJQUdELE1BQU07UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9