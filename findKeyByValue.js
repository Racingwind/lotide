const assertEqual = require('./assertEqual');

const findKeyByValue = function(inputList, showName) {
  /*finds the key (genre) of the given input value (show name)
  :param inputList: object with keys as genre and only 1 value for each key as show
  :param showName: name of the show to look for
  :type inputList: object
  :type showName: string
  :return string: name of the key
  */
  for (const genre in inputList) {
    if (inputList[genre] === showName) {
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");