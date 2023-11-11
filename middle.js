const eqArrays = require('./eqArray');

const middle = function(inputArr) {
  if (inputArr.length < 3) {
    return [];
  }
  let num = inputArr.length / 2;
  if (inputArr.length % 2 === 0) {
    return [inputArr[num - 1], inputArr[num]];
  } else {
    return [inputArr[Math.floor(num)]];
  }
};

module.exports = middle;