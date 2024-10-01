/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let setNums = new Set(nums);
  if (nums.length !== setNums.size) return true;
  return false;
};
