const eqArrays = require('./eqArray');
const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  /*Returns true if both input arrays match each other by element. false otherwise
  :param sentence: the string we are inspecting
  :type sentence: string
  :return object: object with unique letters as keys and an array of indices where they appear in sentence
  */
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let letter = sentence[i];
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.export = letterPositions;

const testString = "hell1o";
const answer = {
  h: [0],
  e: [1],
  l: [2,3],
  o: [5],
  "1": [4]
};

const result = letterPositions(testString);
console.log(result);
assertArraysEqual(result.h, answer.h);
assertArraysEqual(result.e, answer.e);
assertArraysEqual(result.l, answer.l);
assertArraysEqual(result.o, answer.o);
assertArraysEqual(result[1], answer[1]);