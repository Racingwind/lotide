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