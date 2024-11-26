/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 첫번째 포함 마직막 포함 X
  let dp_first = Array.from({ length: nums.length + 1 }, () => 0);
  // 첫번째 X 마지막 포함
  let dp_last = Array.from({ length: nums.length + 1 }, () => 0);

  if (nums.length <= 2) return Math.max(...nums);

  // ----------------------- 1 O L X -----------------------
  dp_first[1] = nums[0];
  dp_first[2] = nums[1];

  for (let i = 3; i <= nums.length - 1; i++) {
    dp_first[i] = Math.max(
      dp_first[i - 2] + nums[i - 1],
      dp_first[i - 3] + nums[i - 1]
    );
  }

  // ----------------------- 1 X L O -----------------------
  dp_last[1] = 0;
  dp_last[2] = nums[1];

  for (let i = 3; i <= nums.length; i++) {
    dp_last[i] = Math.max(
      dp_last[i - 2] + nums[i - 1],
      dp_last[i - 3] + nums[i - 1]
    );
  }

  return Math.max(...dp_first, ...dp_last);
};
