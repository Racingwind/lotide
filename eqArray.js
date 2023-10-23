const assertEqual = function(actual, expected) {
  /*Prints success if two inputs exactly match each other. Fail otherwise
  :param actual: thing to be compared
  :param expected: thing to be compared to
  :type actual: simple data types
  :type expected: simple data types
  :return: does not return anything
  */
  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed : ${actual} !== ${expected}`);
  }
};

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


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false