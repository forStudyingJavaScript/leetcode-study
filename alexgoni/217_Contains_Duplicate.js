/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numberDict = {};

  for (const num of nums) {
    if (numberDict[num] === undefined) numberDict[num] = true;
    else return true;
  }

  return false;
};
