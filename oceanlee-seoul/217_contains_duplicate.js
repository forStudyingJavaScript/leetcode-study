/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const sortedNums = nums.sort();
  for (let i = 0; i <= sortedNums.length; i++) {
    if (i !== sortedNums.length) {
      if (sortedNums[i] === sortedNums[i + 1]) return true;
    }
  }
  return false;
};
