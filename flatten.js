const flatten = function(inputArr) {
  let arrLength = inputArr.length;
  for (let i = 0; i < arrLength; i++) {
    if (Array.isArray(inputArr[i])) {
      let subArr = inputArr[i];
      inputArr.splice(i, 1); //remove the entry
      if (subArr.length) { //if the sub array is not empty
        for (let entry of subArr) { //insert each element of the sub array into the main array via splice
          inputArr.splice(i, 0, entry);
          i++; //shift the arrLength and index count by 1 since we've inserted an extra entry
          arrLength++;
        }
        i--; //we've actually shifted by 1 too many, as the last entry is not an insert but a "replacement", like the case where there is only 1 element in the sub array
        arrLength--;
      }
      else {
        inputArr.splice(i, 0, undefined); //we don't need to shift the index or length count, as this is a replacement, not an insert
      }
    }
  }
  return inputArr;
};

module.exports = flatten;