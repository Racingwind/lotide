const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  /*this function will keep collecting items in an array until the callback function returns true
  param: array: the array to be inspected
  param: callback: the callback function to detemine the conditional boolean
  type: array: array
  tpye: callback: function
  return: array: returns all elements in the original array up to and excluding the element that triggered the conditional boolean
  */
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.export = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);