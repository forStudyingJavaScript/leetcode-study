/**
 * 8m 21s
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const sortedNums = nums
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value);

  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    const sum = sortedNums[left].value + sortedNums[right].value;
    if (sum === target) {
      return [sortedNums[left].index, sortedNums[right].index];
    }

    sum > target ? right-- : left++;
  }

  return [];
};
