/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;  
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  
  return expectedSum - actualSum;
};

// Runtime:  44 ms  Beats 97.80%
// Memory:   51.42 MB Beats 45.81%