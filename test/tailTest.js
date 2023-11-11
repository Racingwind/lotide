const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, [3, 4]] for [1, 2, [3, 4]]", () => {
    assert.deepEqual(tail([1, 2, [3, 4]]), [2, [3, 4]]);
  });

  it("returns [[3, 4]] for [[1, 2], [3, 4]]", () => {
    assert.deepEqual(tail([[1, 2], [3, 4]]), [[3, 4]]);
  });

  it("returns '[]' for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });

  it("returns '[]' for [undefined]", () => {
    assert.deepEqual(tail([undefined]), []); 
  });

  it("returns '[Lighthouse, Labs]' for [Hello, Lighthouse, Labs] without changing the original", () => {
    const arrTest = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(arrTest), ["Lighthouse", "Labs"]);
    assert.deepEqual(arrTest, ["Hello", "Lighthouse", "Labs"]);
  });

});