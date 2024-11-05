/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = 0;
  let prev1 = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = Math.max(prev1, nums[i] + prev2);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};

// Time taken : 26m 36s
// Runtime : 0ms
// Memory : 49.07MB
