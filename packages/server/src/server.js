"use strict";
const express = require('express');
const session = require('express-session');
const { jackpotController } = require('./controllers');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const { SERVER_PORT, AUTHURIZED_CLIENT_PORT } = require('./constants');
const app = express();

app.use(session({
  genid: () => uuidv4(),
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
}));

app.use(cors({
  origin: `http://localhost:${AUTHURIZED_CLIENT_PORT}`,
  credentials: true
}));

app.use(express.json());
app.use('/', jackpotController);
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});