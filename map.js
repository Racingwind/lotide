const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.export = map;

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", " ", "to", "", "major", "tom"];
const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["g", "c", " ", "t", undefined, "m", "t"]);