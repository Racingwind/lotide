const assertEqual = function(actual, expected) {
/*Prints success if two inputs exactly match each other. Fail otherwise
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

module.exports = assertEqual;