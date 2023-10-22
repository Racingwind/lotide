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


/*tail returns the a given array without the first element. if the array has a length of 1 or it's empty, it returns an empty array
:param arr: array to be worked with
:type arr: array
:return: values of first element of array, or undefined
*/
const tail = function(arr) {
  return (arr.length !== 0) ? arr.slice(1) : arr; //if array length is 0, it's empty and return itself, which is empty
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

let array = [1, 2, 3];
assertEqual(array.length, 3);