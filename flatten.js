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


const flatten = function(inputArr) {
  let arrLength = inputArr.length;
  for (let i = 0; i < arrLength; i++) {
    if (Array.isArray(inputArr[i])) {
      let subArr = inputArr[i];
      inputArr.splice(i, 1); //remove the entry
      if (subArr.length) { //if the sub array is not empty
        for (let entry of subArr) { //insert each element of the sub array into the main array via splice
          inputArr.splice(i, 0, entry);
          i++; //shift the arrLength and index count by 1 since we've inserted an extra entry
          arrLength++;
        }
        i--; //we've actually shifted by 1 too many, as the last entry is not an insert but a "replacement", like the case where there is only 1 element in the sub array
        arrLength--;
      }
      else {
        inputArr.splice(i, 0, undefined); //we don't need to shift the index or length count, as this is a replacement, not an insert
      }
    }
  }
  return inputArr;
};


// flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten([1, [], [3, 4], 5, []]), [1, , 3, 4, 5, ,]); // => [1, 2, 3, 4, 5, 6]