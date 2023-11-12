const eqArrays = require('./eqArray')

const eqObjects = function(object1, object2) {
  /*Returns true if both objects have identical keys with identical values. Returns false otherwise.
  :param object1: the object to inspect
  :param object2: the object to compare to
  :type object1: object
  :type object2: object
  :return: boolean
  */

  arrKeys1 = Object.keys(object1);
  arrKeys2 = Object.keys(object2);
  match = (arrKeys1.every(x => arrKeys2.includes(x)))
  if (!match || arrKeys1.length !== arrKeys2.length) { // keys do not match if they don't contain each other or their lengths are different
    return false;
  }
  for (const key of arrKeys1) {
    console.log("check key")
    value1 = object1[key];
    value2 = object2[key];
    if ((Object.prototype.toString.call(object1[key]) === "[object Object]") && (Object.prototype.toString.call(object2[key]) === "[object Object]")) { // values are objects
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      break; // the two values match, skip the rest of the check
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // values are arrays
      if (!eqArrays(value1, value2)) {
        return false;
      }
      break; // the two values match, skip the rest of the check
    }
    if (value1 !== value2) { // values are primitives
      return false;
    }
  }
  return true; // all checks passed
};

module.exports = eqObjects;