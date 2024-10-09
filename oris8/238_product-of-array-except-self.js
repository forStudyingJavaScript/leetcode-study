/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  // 왼/오 나눠서 차례대로 누적곱 업데이트하는 아이디어 검색해서 구현 ....
  const dp = Array.from({ length: nums.length }, (_, i) => ({
    left: nums[i - 1] ? nums[i - 1] : 1,
    right: nums[i + 1] ? nums[i + 1] : 1,
  }));

  for (let i = 1; i < nums.length; i++) {
    dp[i].left = dp[i - 1].left * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i].right = dp[i + 1].right * nums[i + 1];
  }

  return dp.map((item) => item.left * item.right);

  // Follow up 문제 공간복잡도 O(1) 만들기
  // 하나의 answer 배열을 업데이트 해주면 될 듯

  const result = Array(nums.length).fill(1);

  let currentLeft = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = currentLeft;
    currentLeft *= nums[i];
  }
  let currentRight = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= currentRight;
    currentRight *= nums[i];
  }
  return result;
};
