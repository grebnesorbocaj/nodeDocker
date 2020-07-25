const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello boy');
});

const server = app.listen(3000);

module.exports = { app, server };
