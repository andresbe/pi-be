const User = require('../models/User');
const userService = require('../services/userService');

const registerUser = async (req,res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginUser = async (req,res) => {
   try {
        const login = await userService.loginUser(req.body);
        res.status(200).json({
            status: 'ok',
            ...login
        });
   } catch(err) {
        res.status(400).json({
            status:'error',
            message: err.message
        });
   }
}

module.exports = { registerUser,loginUser };