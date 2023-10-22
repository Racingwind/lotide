/*assertEqual prints success if two inputs exactly match each other. Fail otherwise
:param actual: thing to be compared
:param expected: thing to be compared to
:type actual: simple data types
:type expected: simple data types
:return: does not return anything
*/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed : ${actual} !== ${expected}`);
  }
};


/*head returns the first element in a given array. if the array is empty, it returns undefined
:param arr: array to be worked with
:type arr: array
:return: values of first element of array, or undefined
*/
const head = function(arr) {
  return (arr.length !== 0) ? arr[0] : undefined; //if array length is 0, it's empty and return undefined. inspired by the lodash implementation, i tried my hand at ternary operator
};



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");