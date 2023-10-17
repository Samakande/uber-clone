'use strict';

const authServices = require('..');
const assert = require('assert').strict;

assert.strictEqual(authServices(), 'Hello from authServices');
console.info('authServices tests passed');
