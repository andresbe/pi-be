// Importamos las dependencias
import express from 'express';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';

import { registerUser } from './config/server.js';

const PORT = 8080;

// Framework de aplicaciones web
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// recuperar la session y pasar a la siguiente ruta
app.use((req, res, next) => {
    const token = req.cookies.access_token;
    req.session = { user: null };

    try {
        const data = jwt.verify(token, 'jsonwebtoken_super_secreto');
        req.session.user = data;
    } catch {}

    next();
})

// Al recibir una peticion GET del navegador, enviamos como respuesta "Bienvenido"
app.get('/', (req, res) => {
    const { user } = req.session;
    if ( !user ) res.send('<h1> Bienvenido al Proyecto Integrador </h1>');
    res.send(`<h1> Hola ${ user.username } </h1>`);
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try{
        const user = await registerUser.login({ username, password });
        const token = jwt.sign({ user: user._id, username: user.username }, 
        'jsonwebtoken_super_secreto', {
            expiresIn: '1h',
        })

        res
        .cookie('access_token', token, {
            httpOnly: true, // cookie solo accesible desde html
            maxAge: 1000 * 60 * 60
        })
        .send({ user, token })

    }catch (error) {
        res.status(401).send(error.message);
    }
});

// Permite registrar un nuevo usuario
app.post('/register', async (req, res) => {
    const {username, password, email } = req.body;
    console.log({ username, password, email });

    try { 
        const id = await registerUser.create({ username, password, email });
        res.send({ id, username });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// Elimina la cookie cerrando la session
app.post('/logout', (req, res) => {
    res
    .clearCookie('access_token')
    .json({ message: 'Ha cerrado su session'})
});

//Solo accesible si se ha iniciado session.
app.get('/protected', (req, res) => {
    const { user } = req.session;
    if (!user) return res.status(403).send('Acceso no autorizado');
    res.send(`<h1> Pagina protegida de ${ user.username } </h1>`);
});

// Muestra por consola la direccion donde esta corriendo el servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})