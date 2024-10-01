/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let number = 0;
  let arr = nums.sort((a, b) => a - b);
  arr.forEach((num) => {
    if (num !== number) return number;
    number++;
  });
  return number;
};
