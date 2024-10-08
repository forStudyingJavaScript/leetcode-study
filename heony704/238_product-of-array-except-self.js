/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 28:56
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = Array.from({ length: nums.length }, () => 1);

  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    count *= nums[i];
    answer[i + 1] *= count;
  }

  count = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    count *= nums[i];
    answer[i - 1] *= count;
  }

  return answer;
};
