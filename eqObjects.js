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




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

const multiColorShirtObject2 = { colors: ["r", "e", "d"], size: "medium" };
const anotherMultiColorShirtObject2 = { size: "medium", colors: "red" };
eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2); // => false
assertEqual(eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2), false); // => false