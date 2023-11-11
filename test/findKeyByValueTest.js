const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'sci_fi' for 'The Expanse'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

});