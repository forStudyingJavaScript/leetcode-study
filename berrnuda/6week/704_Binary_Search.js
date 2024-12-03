/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let first = 0;
  let last = nums.length - 1;

  for (; first <= last; ) {
    let curr = Math.floor((first + last) / 2);

    if (nums[curr] === target) return curr;
    else if (nums[curr] < target) first = curr + 1;
    else last = curr - 1;
  }

  return -1;
};
