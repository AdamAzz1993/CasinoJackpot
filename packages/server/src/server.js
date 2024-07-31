"use strict";
const express = require('express');
const session = require('express-session');
const { jackpotController } = require('./controllers');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(session({
  genid: () => uuidv4(),
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
}));

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

app.use(express.json());
app.use('/', jackpotController);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});