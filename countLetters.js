const assertEqual = function(actual, expected) {
/* FUNCTION IMPLEMENTATION
Prints success if two inputs exactly match each other. Fail otherwise

:param actual: thing to be compared
:param expected: thing to be compared to
:type actual: simple data types
:type expected: simple data types
:return: does not return anything
*/
  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed : ${actual} !== ${expected}`);
  }
};
  
const countLetters = function(inputString) {
  /*given an input strings. It will return an object containing counts of each unique letters
  param: inputString: an array of strings that we need to look through
  type: inputString: string
  return: an object with the final count of each unique letter
  */
  const results = {};
  for (const letter of inputString) {
    if (letter !== " ") {
      if (results[letter]) { //need to manually assign a number if the key doesn't exist. as you cannot simply "+= 1" to something that's undefined
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};


const result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);