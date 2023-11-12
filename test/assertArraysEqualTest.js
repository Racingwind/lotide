const assertArraysEqual = require('../assertArraysEqual');

// // TEST CODE
console.log("assertArraysEqualTest");
console.log([1, 2, 3], [1, 2, 3], " true");
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
console.log([1, 2, 3], [3, 2, 1], " false");
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

console.log(["1", "2", "3"], ["1", "2", "3"], " true");
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
console.log(["1", "2", "3"], ["1", "2", 3], " false");
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
console.log("-----")