const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
/*Prints Assertion passed if actual is equal to expected
:param actual: the object to inspect
:param expected: the object to compare to
:type actual: object
:type expected: object
:return: this function does not return anything
*/
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed : ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

module.exports = assertObjectsEqual;

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// const anotherMultiColorShirtObject2 = { size: "medium", colors: ["red", "purple"] };
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject2);