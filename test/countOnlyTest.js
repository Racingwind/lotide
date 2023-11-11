const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
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

  it("returns l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 for 'lighthouse in the house'", () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}), {Jason: 1, Fang: 2});
  });

});