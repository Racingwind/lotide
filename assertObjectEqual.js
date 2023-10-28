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
  
  const eqObjects = function(object1, object2) {
  /*Returns true if both objects have identical keys with identical values. Returns false otherwise.
  :param object1: the object to inspect
  :param object2: the object to compare to
  :type object1: object
  :type object2: object
  :return: boolean
  */
    if (Object.keys(object1).length === Object.keys(object2).length) {
      for (const key in object1) {
        let objKey1 = object1[key];
        let objKey2 = object2[key];
        if (Array.isArray(objKey1) && Array.isArray(objKey2)) {
          if (!(eqArrays(objKey1, objKey2))) {
            return false;
          }
        } else {
          if (objKey1 !== objKey2) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };

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

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const anotherMultiColorShirtObject2 = { size: "medium", colors: ["red", "purple"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject2);