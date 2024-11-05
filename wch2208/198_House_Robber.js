/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  let i = 2;
  while (i < nums.length) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    i++;
  }

  return dp[nums.length - 1];
};

// time: 53m
// memory: 48.87MB
