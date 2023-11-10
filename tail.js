const assertEqual = require('./assertEqual');


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