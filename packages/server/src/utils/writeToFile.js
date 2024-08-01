"use strict";
const fs = require('node:fs');

const writeToFile = (content) => {
    try {
        fs.appendFile('./history.txt', content, err => {
            if (err) {
                return false;
            }
            return true;
        });    
    } catch (error) {
        throw Error('Error occurs on writing to file');
    }
}

module.exports = {
    writeToFile,
}