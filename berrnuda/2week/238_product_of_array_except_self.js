/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);

  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length; j++) {
  //         if (i !== j) result[i] *= nums[j];
  //     }
  // }

  // return result;

  // let leftNum = 1, rightNum = 1;

  // for (let i = 0; i < nums.length; i++) {
  //     result[i] = leftNum;
  //     leftNum *= nums[i];
  // }

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let rightNum = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightNum;
    rightNum *= nums[i];
  }

  return result;
};

// Runtime:  104 ms   Beats 57.07%
// Memory:   66.98 MB Beats 14.99%

// Runtime:  100 ms   Beats 69.84%
// Memory:   64.41 MB Beats 53.44%

// 21:22
