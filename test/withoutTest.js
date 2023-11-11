const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns [4, 5, 6] for ([4, 5, 6])", () => {
    assert.deepEqual(without([4, 5, 6]), [4, 5, 6]);
  });

  it("returns [4, 5, 6] for ([4, 5, 6])", () => {
    assert.deepEqual(without([4, 5, 6]), [4, 5, 6]);
  });

  it("returns true for original array was not mutated", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"])
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });


});