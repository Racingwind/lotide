const eqArrays = function(arr1, arr2) {
  /*Returns true if both input arrays match each other by element. false otherwise
  :param arr1: array 1
  :param arr2: array 2
  :type arr1: array
  :type arr2: array
  :return: boolean
  */
  let arrLength = arr1.length;
  if (arrLength === arr2.length) {
    for (let i = 0; i < arrLength; i++) {
      if (arr1[i] !== arr2[i]) { //if we find an element to not match, immediately return with false
        return false;
      }
    }
    return true; //all elements passed, return true
  }
  else {
    return false; //array length does not match, they cannot be equal
  }
}

const assertArraysEqual = function(input1, input2) {
  /*Prints success if two inputs exactly match each other. Fail otherwise
  :param input1: thing to be compared
  :param input2: thing to be compared to
  :type input1: array
  :type input2: array
  :return: does not return anything
  */
  if (eqArrays(input1, input2) === true) {
    console.log(`✅ Assertion Passed : ${input1} ===  ${input2}`);
  } else {
    console.log(`❌ Assertion Failed : ${input1} !== ${input2}`);
  }
};

// TEST CODE
console.log([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
console.log([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

console.log(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
console.log(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false