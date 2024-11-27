/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = Array.from({ length: nums.length + 1 }, () => 0);

  dp[1] = nums[0];
  if (nums.length > 1) {
    dp[2] = nums[1];
  }

  for (let i = 3; i <= nums.length; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], nums[i - 1] + dp[i - 3]);
  }

  return Math.max(...dp);
};
