/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let ans = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      ans = mid;
      break;
    } else if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return ans;
};
