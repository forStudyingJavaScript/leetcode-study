/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const robRange = (start, end) => {
    let prev1 = 0;
    let prev2 = 0;

    for (let i = start; i <= end; i++) {
      let temp = Math.max(prev1, prev2 + nums[i]);
      prev2 = prev1;
      prev1 = temp;
    }

    return prev1;
  };

  return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1));
};
