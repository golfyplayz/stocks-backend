const express = require('express');
const app = express();

module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json({ message: 'Hello World' });
    } else {     
        res.status(405).json({ message: 'We only support GET' });
    }
}

app.get('/test', (req, res) => {
    res.json({ message: 'Hello World' });
});