/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;

  let numsSum = 0;
  for (let num of nums) {
    numsSum += num;
  }

  return totalSum - numsSum;
};
