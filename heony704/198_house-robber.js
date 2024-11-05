/**
 * https://leetcode.com/problems/house-robber/
 * 28m
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 3) return Math.max(nums[0], nums[1] ?? 0);

  const amounts = [nums[0], nums[1], nums[2] ? nums[2] + nums[0] : 0];

  for (let i = 3; i < nums.length; i++) {
    amounts.push(nums[i] + Math.max(amounts[i - 2], amounts[i - 3]));
  }

  return Math.max(amounts[amounts.length - 2], amounts[amounts.length - 1]);
};
