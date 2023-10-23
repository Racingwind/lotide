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

const without = function(arr, values) {
  /*without removes a given list of values from the input array and returns a new array
  param: arr: the array to inspect
  param: values: list of values to be removed from the array
  type: arr: array
  type: values: array
  return: array: returns new array of filtered values
  */
  if (arr === null || arr === undefined || values === null || values === undefined) {
    return arr;
  }
  let arrLength = arr.length;
  let i = 0;
  let arrLocal = Array.from(arr); //making a shallow copy so we don't change the original array being referenced by arr with splice
  while (i < arrLength) {
    for (value of values) {
      if (arrLocal[i] === value) {
        arrLocal.splice(i, 1); //remove the element from array and compact it
        i -= 1; //decrement index counter as array length has shrunk by 1
        arrLength -= 1; //decrement array length since it has shrunk by 1 due to splice
        break; //the element has been removed, no need to check other values
      }
    }
    i++;
  }

  return arrLocal;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["4", "5", "6"])) // => ["4", "5", "6"]
console.log(without(["7", "8", "9"], ["7", "9"])) // => ["8"]
console.log(without([true, undefined, false], [undefined])) // => [true, false]
console.log(without(null, ["7", "9"])) // => null
console.log(without(["7", "8", "9"], ["7", "8", "9"])) // => []
console.log(without([0], [0])) // => []
console.log(without(["7", 0, "9"], [0])) // => ["7", "9"]


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// let test = ['1', '2', '3'];
// test2 = test.splice(1, 1); <------ this is weird!!
// test3 = test
// console.log(test)
// console.log(test2);
// console.log(test3)