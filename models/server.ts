
import express, {Application} from 'express';

import useRoutes from '../routes/usuario'
import cors from 'cors';
import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express(),
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        //Middlewares
        this.middlewares();

        //Definir rutas
        this.routes();
    
    }

    //TODO: conectar bd

    async dbConnection(){
        try{

            await db.authenticate();
            console.log('DB online')

        }catch(error){
            console.error('Unable to connect to the database:', error);

        }
    }

    middlewares(){

        //CORS
        this.app.use(cors() );
        //Lectura del body
        this.app.use(express.json() );

        //carpeta pública
        this.app.use(express.static('public') )
    }


    routes(){
        this.app.use(this.apiPaths.usuarios, useRoutes)
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en Puerto ' + this.port)
        })
    }
}

export default Server;