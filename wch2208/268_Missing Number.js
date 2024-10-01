/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  if (n === 1) {
    return nums[0] === 0 ? 1 : 0;
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
};

// Time taken: 48 m
