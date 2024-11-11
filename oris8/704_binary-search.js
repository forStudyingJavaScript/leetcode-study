/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const binarySearch = function (left, right) {
    if (left > right) {
      return -1;
    }

    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = nums[pivotIndex];

    if (pivot === target) return pivotIndex;
    if (pivot < target) return binarySearch(pivotIndex + 1, right);
    return binarySearch(left, pivotIndex - 1);
  };

  return binarySearch(0, nums.length - 1);
};
