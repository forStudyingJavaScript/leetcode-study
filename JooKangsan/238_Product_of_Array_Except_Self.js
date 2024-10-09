

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
  let product = new Array(n).fill(1);
  let leftValue = 1;
  for (let i = 0; i < n; i++) {
    product[i] = leftValue;
    leftValue *= nums[i];
  }
  let rightValue = 1;
  for (let i = n - 1; i >= 0; i--) {
    product[i] *= rightValue;
    rightValue *= nums[i];
  }

  return product;
};