/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let max = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 1;

      while (numSet.has(num + length)) {
        length += 1;
      }

      max = Math.max(max, length);
    }
  }
  return max;
};

// Time taken : 31m 17s
// Runtime : 35ms
// Memory : 72.97MB
