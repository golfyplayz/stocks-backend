const express = require('express');
const app = express();

const PORT = process.env.PORT || 8040;

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.get('/test', (req, res, next) => {
  res.send('Hello World! You added a new route!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;