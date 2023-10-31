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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);