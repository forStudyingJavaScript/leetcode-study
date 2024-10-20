// 😢

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const fixed = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = fixed + nums[left] + nums[right];

      if (sum === 0) {
        result.push([fixed, nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};
