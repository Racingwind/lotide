const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPosition", () => {

  it("returns '{h: [0], e: [1], l: [2,3], o: [5], 1: [4] }; for 'hell1o'", () => {
    assert.deepEqual(letterPositions("hell1o"), {h: [0], e: [1], l: [2,3], o: [5], "1": [4]});
  });

});