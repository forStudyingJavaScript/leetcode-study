/**
 * https://leetcode.com/problems/single-number/
 * 7m
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  }

  return [...numSet][0];
};
