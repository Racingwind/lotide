const assertEqual = require('./assertEqual');

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