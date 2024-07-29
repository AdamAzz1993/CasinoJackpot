'use strict';

const server = require('../src/server');
const assert = require('assert').strict;

assert.strictEqual(server(), 'Hello from server');
console.info('server tests passed');
