// Importamos las dependencias
import express from 'express';
import dotenv from 'dotenv';

// fix para __dirname
import path from 'path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Determina que enviorement cargar.
const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production';
dotenv.config({ path: path.resolve(__dirname, `../${envFile}`) });

const PORT = process.env.PORT || 8000;

// Framework de aplicaciones web
const app = express();

// Al recibir una peticion GET del navegador, enviamos como respuesta "Bienvenido"
app.get('/', (req, res) => {
    res.send('<h1> Bienvenido </h1>');
})

// Muestra por consola la direccion donde esta corriendo el servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})