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
  } else {
    return false; //array length does not match, they cannot be equal
  }
};

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

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]