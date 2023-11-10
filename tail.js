/*tail returns the a given array without the first element. if the array has a length of 1 or it's empty, it returns an empty array
:param arr: array to be worked with
:type arr: array
:return: values of first element of array, or undefined
*/
const tail = function(arr) {
  return (arr.length !== 0) ? arr.slice(1) : arr; //if array length is 0, it's empty and return itself, which is empty
};

module.exports = tail;