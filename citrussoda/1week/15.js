/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let answer = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let target = nums[i];
    let startIndex = i + 1;
    let lastIndex = nums.length - 1;

    while (startIndex < lastIndex) {
      let sum = target + nums[startIndex] + nums[lastIndex];
      if (sum > 0) {
        lastIndex -= 1;
      } else if (sum < 0) {
        startIndex += 1;
      } else {
        answer.push([target, nums[startIndex], nums[lastIndex]]);
        while (
          startIndex < lastIndex &&
          nums[startIndex] === nums[startIndex + 1]
        )
          startIndex += 1;
        while (
          startIndex < lastIndex &&
          nums[lastIndex] === nums[lastIndex - 1]
        )
          lastIndex -= 1;
        startIndex += 1;
        lastIndex -= 1;
      }
    }
  }

  return answer;
};
