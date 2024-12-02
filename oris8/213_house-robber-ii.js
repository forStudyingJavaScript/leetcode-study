/**
 * 213 / House Robber II / Medium / 13m 27s
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // T(n) = Math.max(T(n-1), T(n-2) + n)
  if (nums.length <= 2) return Math.max(nums[0], nums?.[1] || 0);

  const results = [nums[0], Math.max(nums[0], nums[1])];
  const not1results = [0, nums[1]];
  for (let i = 2; i < nums.length; i++) {
    results[i] = Math.max(results[i - 1], results[i - 2] + nums[i]);
    not1results[i] = Math.max(not1results[i - 1], not1results[i - 2] + nums[i]);
  }

  return Math.max(results[nums.length - 2], not1results[nums.length - 1]);
};
