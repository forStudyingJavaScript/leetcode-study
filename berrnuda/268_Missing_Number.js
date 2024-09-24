/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const { length } = nums;
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    if (sortedNums[i] !== i) return i;
  }

  return length;
};
