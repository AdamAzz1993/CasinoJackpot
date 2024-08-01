"use strict";
// Game constants
const POSSIBLE_SYMBOLS = ['C', 'L', 'O', 'W'];
const CREDIT_RANGE = {
    moderate: 40,
    high: 60,
}
const CHEAT_CHANCE = {
    moderate: 0.3,
    high: 0.6,
}
const WIN_AMOUNT = {
    'C': 10,
    'L': 20,
    'O': 30,
    'W': 40,
}
const INITIAL_CREDIT = 10;
const NUMBER_OF_BLOCKS = 3;

// Configurations constants
const SERVER_PORT = 4000;
const AUTHURIZED_CLIENT_PORT = 8080;


module.exports = {
    POSSIBLE_SYMBOLS,
    CREDIT_RANGE,
    CHEAT_CHANCE,
    WIN_AMOUNT,
    INITIAL_CREDIT,
    NUMBER_OF_BLOCKS,
    SERVER_PORT,
    AUTHURIZED_CLIENT_PORT,
}