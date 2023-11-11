const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true);
  });

  it("returns false for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red", sleeveLength: "long" }), false);
  });

  it("returns false for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'] }", () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }), true);
  });

  it("returns false for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }", () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }), false);
  });

  it("returns false for { colors: ['r', 'e', 'd'], size: 'medium' } and { size: 'medium', colors: 'red' }", () => {
    assert.strictEqual(eqObjects({ colors: ["r", "e", "d"], size: "medium" }, { size: "medium", colors: "red" }), false);
  });

});