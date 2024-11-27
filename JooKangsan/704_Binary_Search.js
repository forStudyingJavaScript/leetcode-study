/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      const center = Math.floor((left + right) / 2);

      if (nums[center] === target) {
          return center;
      } else if (nums[center] < target) {
          left = center + 1;
      } else {
          right = center - 1;
      }
  }

  return -1;
}