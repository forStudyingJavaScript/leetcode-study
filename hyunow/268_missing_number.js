var missingNumber = function (nums) {
  // 오름차순 정렬
  nums = nums.sort((a, b) => a - b);

  if (nums[0] !== 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1;
    }
  }
  return undefined;
};
