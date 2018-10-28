const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');
const make = require("./make.js");

describe('sumOfOther', () => {
  it('sumOfOthertest 1', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  
   it('sumOfOthertest 2', () => {
    assert.deepEqual(sumOfOther([1,2,3,4,5,6,7]), [27, 26, 25, 24, 23, 22, 21]);
  });
});

describe('make', () => {
  it('makeTest 1', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
  
   it('makeTest 2', () => {
    assert.deepEqual(make(10)(34, 21, 6, 10, 55)(60)(sum), 196);
  });
});

function sum(a, b) {
  return a + b;
}