/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        result.push([nums[i], nums[j], nums[k]]);

        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      }
    }
  }

  return result;
};

// Time taken: 29 m 55 s
