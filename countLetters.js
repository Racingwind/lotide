const countLetters = function(inputString) {
  /*given an input strings. It will return an object containing counts of each unique letters
  param: inputString: an array of strings that we need to look through
  type: inputString: string
  return: an object with the final count of each unique letter
  */
  const results = {};
  for (const letter of inputString) {
    if (letter !== " ") {
      if (results[letter]) { //need to manually assign a number if the key doesn't exist. as you cannot simply "+= 1" to something that's undefined
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

