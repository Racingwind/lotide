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
      if (Array.isArray(arr1[i])) { // if element is an array
        if(!(eqArrays(arr1[i], arr2[i]))) {
          return false;
        }
        continue; // the two arrays match, skip the rest of the checks
      }
      if (arr1[i] !== arr2[i]) { //if we find an element to not match, immediately return with false
        return false;
      }
    }
    return true; //all elements passed, return true
  }
  else {
    return false; //array length does not match, they cannot be equal
  }
};

module.exports = eqArrays;