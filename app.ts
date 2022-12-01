
import dotenv from 'dotenv';
import Server from './models/server';

//Configurar dontenv
dotenv.config()


const server = new Server;

server.listen();