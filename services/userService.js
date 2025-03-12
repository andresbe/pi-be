const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const registerUser = async ({ name, email, password }) => {
    // Check if user exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Create new user
    const user = new User({ name, email, password });
    await user.save();
    return user;
};

const loginUser = async ({email, password}) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    console.log('Secret es:', process.env.JWT_SECRET);
    const token = jwt.sign(
        { userId: user._id, email: user.email },
        'ensenada',
        { expiresIn: '1h' }
    );

    return { token, user: { id: user._id, name: user.name, email: user.email } };
}

module.exports = { registerUser, loginUser };