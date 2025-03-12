const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'logs.txt');

exports.loggerMiddleware = async (req, res, next) => {
    const content = `\nRequest made: ${req.method} ${req.url} at ${new Date().toISOString()}`;
    fs.appendFile(filePath, content, 'utf8', (err) => {
        // handle error
    });
    next();
};