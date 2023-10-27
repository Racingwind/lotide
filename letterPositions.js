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


const letterPositions = function(sentence) {
  /*Returns true if both input arrays match each other by element. false otherwise
  :param sentence: the string we are inspecting
  :type sentence: string
  :return object: object with unique letters as keys and an array of indices where they appear in sentence
  */
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let letter = sentence[i];
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

const testString = "hell1o";
const answer = {
  h: [0],
  e: [1],
  l: [2,3],
  o: [5],
  "1": [4]
};

const result = letterPositions(testString);
console.log(result);
assertArraysEqual(result.h, answer.h);
assertArraysEqual(result.e, answer.e);
assertArraysEqual(result.l, answer.l);
assertArraysEqual(result.o, answer.o);
assertArraysEqual(result[1], answer[1]);