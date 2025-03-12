const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (next){
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//Define the model
const User = mongoose.model('User',userSchema);
module.exports = User;