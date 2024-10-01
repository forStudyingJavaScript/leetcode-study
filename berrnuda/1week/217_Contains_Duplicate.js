/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const { length } = nums;
  const num = {};

  for (let i = 0; i < length; i++) {
    if (num[nums[i]]) return true;
    num[nums[i]] = true;
  }

  return false;
};
