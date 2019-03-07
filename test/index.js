const assert = require('assert').strict;
const func = require('../dist')(require('../test/func'));
assert.strictEqual(typeof func, 'function');
console.log(`✔ Passed: typeof func === '${typeof func}'`);
