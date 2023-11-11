const assertObjectsEqual = require("../assertObjectEqual");

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const anotherMultiColorShirtObject2 = { size: "medium", colors: ["red", "purple"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject2);