const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
/*given an array and an object. It will return an object containing counts of everything that the input object listed.
param: allItems: an array of strings that we need to look through
param: itemsToCount: an object specifying what to count
type: allItems: array
type: itemsToCount: object
return: an object with the final count
*/
const results = {};

for (const item of allItems) {
  if (itemsToCount[item]) {
    if (results[item]) { //need to manually assign a number if the key doesn't exist. as you cannot simply "+= 1" to something that's undefined
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
}
return results;
}

module.export = countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);