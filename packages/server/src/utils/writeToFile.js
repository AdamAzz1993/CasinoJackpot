const fs = require('node:fs');

const writeToFile = (content) => {
    fs.appendFile('./history.txt', content, err => {
        if (err) {
            return false;
        }
        return true;
    });
}

module.exports = {
    writeToFile,
}