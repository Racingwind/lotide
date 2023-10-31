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

const findKey = function(itemsObj, callback) {
  /*This function will iterate through each object key and pass the key to the callback function and return the key if the callback function returns true
  param: object: the object to be inspected
  param: callback: the callback function to determine the conditional boolean
  type: object: object
  tpye: callback: function
  return: string: string of the first key whose value matches value returned by the callback function or undefined if it does not find a match
  */
  for (const item in itemsObj) {
    if (callback(itemsObj[item])) {
      return item;
    }
  }
  return undefined;
};



const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5); // => "undefined"

const test3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3); // => "Akaleri"

assertEqual(test1, "noma");
assertEqual(test2, undefined);
assertEqual(test3, "Akaleri");