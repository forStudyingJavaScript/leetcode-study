/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let products = Array(nums.length).fill(1);

  let before = 1;
  for (let i = 0; i < nums.length; i++) {
    products[i] *= before;
    before *= nums[i];
  }

  let after = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] *= after;
    after *= nums[i];
  }

  return products;
};
