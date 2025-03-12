require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('Missing MONGO_URI in .env file');
    process.exit(1);
}

function connectDB() {
    mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
}

module.exports = { connectDB } // exportar function connectDB