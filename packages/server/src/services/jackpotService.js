"use strict";
const isNil = require('lodash/isNil');
const { v4: uuidv4 } = require('uuid');
const { 
    POSSIBLE_SYMBOLS,
    CREDIT_RANGE,
    CHEAT_CHANCE,
    WIN_AMOUNT,
    INITIAL_CREDIT } = require('../constants');
const { writeToFile } = require('../utils');
const { JackpotRoll } = require('../models');

const rollJackpot = (credits) => {
    const cheatChance = getCheatChance(credits);
    let pointsEarned = 0;

    let blocks = roll();
    const shouldReRoll = allSame(blocks) && Math.random() < cheatChance;
    
    // Re-roll if the cheat chance is true
    if (shouldReRoll) {
        blocks = roll();
        jackpotRoll.blocks = blocks;
    }

    pointsEarned = allSame(blocks) ? WIN_AMOUNT[blocks[0]] : -1;

    const jackpotRoll = new JackpotRoll(blocks, pointsEarned);

    return jackpotRoll;
};

// Check if all values are the same
const allSame = (blocks) => blocks.every(val => val === blocks[0]);;

// Function to get a random symbol from POSSIBLE_SYMBOLS
const getRandomSymbol = () => {
    return POSSIBLE_SYMBOLS[Math.floor(Math.random() * POSSIBLE_SYMBOLS.length)];
}

const getCheatChance = (credits) => {
    if (credits >= CREDIT_RANGE.moderate && credits <= CREDIT_RANGE.high) {
        return CHEAT_CHANCE.moderate;
    } else if (credits > CREDIT_RANGE.high) {
        return CHEAT_CHANCE.high;
    } else {
        return 0;
    }
}

const roll = () => {
    const blockResults = [];
    for (let i = 0; i < 3 ; i++) {
        blockResults[i] = getRandomSymbol();
    }
    return blockResults;
};

const initialState = (session) => {
    return !isNil(session?.credit) ? session.credit : INITIAL_CREDIT;
}

const cashOut = (session) => {
    const { credit } = session;
    writeToFile(`${uuidv4()}: ${credit}\n`);
    session.destroy();
}
module.exports = {
    rollJackpot,
    getCheatChance,
    roll,
    allSame,
    getRandomSymbol,
    initialState,
    cashOut,
}