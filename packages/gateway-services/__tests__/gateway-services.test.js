'use strict';

const gatewayServices = require('..');
const assert = require('assert').strict;

assert.strictEqual(gatewayServices(), 'Hello from gatewayServices');
console.info('gatewayServices tests passed');
