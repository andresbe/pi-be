const express = require('express');
const bcrypt = require('bcryptjs');

const { registerUser, loginUser } = require('../controllers/userController');

const User = require('../models/User');

const router = express.Router();

const authenticateToken = (req, res, next) => {
    console.log('Entro al middle ware 1');
    next();
    // const token = req.header('Authorization')?.replace('Bearer ', '');
    // console.log('El token:', token.replace(' ',''));

    // if (!token) {
    //     return res.status(401).json({ error: 'Access denied. No token provided.' });
    // }

    // try {
    //     console.log('Secret es:', process.env.JWT_SECRET);
    //     const decoded = jwt.verify(token, 'ensenada');
    //     req.user = decoded;
    //     next();
    // } catch (error) {
    //     res.status(401).json({ error: 'Invalid or expired token' });
    // }
};

const middleWare2 = (req,res,next) => {
    // const role = req.body.role;
    const role = 'client';
    console.log('Entro al middle ware 2');
    if(role != 'Admin') {
        res.status(400).json({
            status: 'fail',
            message: 'Tu rol no tiene los permisos suficientes.'
        });
    } else {
        next();
    }
    
}

router.get('/users',async (req,res)=> {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

router.get('/validate',authenticateToken, middleWare2,(req,res) =>{
    console.log('Enviar Respuesta');
    res.status(200).json({
        status: 'ok',
        message: 'validacion paso correctamente'
    });
});
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);

router.route('/users/:id')
    .patch(async (req,res) =>{
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })

module.exports = router;