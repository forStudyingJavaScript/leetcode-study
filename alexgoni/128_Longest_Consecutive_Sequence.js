/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let result = 1;
  let temp = 1;
  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i] + 1) temp++;
    else {
      result = Math.max(result, temp);
      temp = 1;
    }
  }

  result = Math.max(result, temp);
  return result;
};
