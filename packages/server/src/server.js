"use strict";
const express = require('express');
const session = require('express-session');
const { jackpotController } = require('./controllers');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

app.use(session({
  genid: () => uuidv4(),
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  credit: 10,
}));

app.use(express.json());
app.use('/', jackpotController);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});