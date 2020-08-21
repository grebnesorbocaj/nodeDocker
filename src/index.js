const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');

const myLogger = require('./utils/middleware/myLogger');
const reqTime = require('./utils/middleware/reqTime');

const app = express();

const logStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
});

     app.use(reqTime);
app.use(myLogger);
app.use(morgan('common', { stream: logStream }));

app.use(cors());

app.get('/', (req, res) => {
  res.send(`hello boy, ${req.time}`);
});

const server = app.listen(3000);

module.exports = { app, server };
