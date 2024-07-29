'use strict';

const client = require('../src/web');
const assert = require('assert').strict;

assert.strictEqual(client(), 'Hello from client');
console.info('client tests passed');
