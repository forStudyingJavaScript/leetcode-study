/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const { length } = nums;
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < length - 2; i++) {
    if (i != 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    for (let j = i + 1, k = length - 1; j < k; ) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];

      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);

        while (j < k && sortedNums[j] === sortedNums[j + 1]) j++;
        while (j < k && sortedNums[k] === sortedNums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};
