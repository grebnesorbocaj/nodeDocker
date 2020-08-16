const express = require('express');
const cors = require('cors');
const myLogger = require('./utils/middleware/myLogger');
const reqTime = require('./utils/middleware/reqTime');

const app = express();

app.use(reqTime);
app.use(myLogger);
app.use(cors());

app.get('/', (req, res) => {
  res.send(`hello boy, ${req.time}`);
});

const server = app.listen(3000);

module.exports = { app, server };
