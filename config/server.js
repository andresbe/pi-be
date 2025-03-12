const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const dotenv = require('dotenv');

// Determine the environment and load the corresponding .env file
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(__dirname, `../${envFile}`) });

// DB
const { connectDB } = require('../config/client');

// Routes
const userRouter = require('../routes/usersRouter');
const { loggerMiddleware } = require('../utils/logger');

const PORT = process.env.PORT || 8080;

function startServer() {
    const app = express();
    
    app.use(cors());
    app.use(express.json());
    // app.use(helmet());

    // connectDB();
    app.use(loggerMiddleware);
    app.use(userRouter); /// use es agregar este middleware

    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
    });
}

module.exports = { startServer };
