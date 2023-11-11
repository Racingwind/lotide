const assertEqual = require('./assertEqual')

const eqArrays = require('./eqArray')

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

module.exports = eqObjects;


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

// const multiColorShirtObject2 = { colors: ["r", "e", "d"], size: "medium" };
// const anotherMultiColorShirtObject2 = { size: "medium", colors: "red" };
// eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2); // => false
// assertEqual(eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2), false); // => false