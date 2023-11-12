const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns true for { color: 'red', size: 'medium' } and { color: 'red', size: 'medium' }", () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { color: "red", size: "medium" }), true);
  });
  
  it("returns true for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true);
  });

  it("returns false for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red", sleeveLength: "long" }), false);
  });

  it("returns true for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'] }", () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }), true);
  });

  it("returns false for { colors: ['blue', 'red'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'] }", () => {
    assert.strictEqual(eqObjects({ colors: ["blue", "red"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }), false);
  });

  it("returns false for { colors: ['red', 'blue', 'green'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'] }", () => {
    assert.strictEqual(eqObjects({ colors: ["blue", "red", "green"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }), false);
  });

  it("returns false for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue', 'green'] }", () => {
    assert.strictEqual(eqObjects({ colors: ["blue", "red"], size: "medium" }, { size: "medium", colors: ["red", "blue", "green"] }), false);
  });

  it("returns false for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }", () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }), false);
  });

  it("returns false for { colors: ['r', 'e', 'd'], size: 'medium' } and { size: 'medium', colors: 'red' }", () => {
    assert.strictEqual(eqObjects({ colors: ["r", "e", "d"], size: "medium" }, { size: "medium", colors: "red" }), false);
  });

  it("returns false for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

});