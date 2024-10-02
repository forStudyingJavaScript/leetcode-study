/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const sum = (n * (n + 1)) / 2;
  const missingSum = nums.reduce((a, c) => a + c, 0);

  return sum - missingSum;
};
