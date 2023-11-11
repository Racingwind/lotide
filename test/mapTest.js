const assert = require('chai').assert;
const map = require('../map');

describe("map", () => {

  it("returns ['g', 'c', 't', 'm', 't']; for ['ground', 'control', 'to', 'major', 'tom'] and (words2, word => word[0])", () => {
    const words1 = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words1, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("returns ['g', 'c', ' ', 't', undefined, 'm', 't']; for ['ground', 'control', ' ', 'to', '', 'major', 'tom'] and (words2, word => word[0])", () => {
    const words2 = ["ground", "control", " ", "to", "", "major", "tom"];
    assert.deepEqual(map(words2, word => word[0]), ["g", "c", " ", "t", undefined, "m", "t"]);
  });

});