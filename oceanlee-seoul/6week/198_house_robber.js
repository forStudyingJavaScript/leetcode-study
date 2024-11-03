/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 집이 한 채일 경우 바로 리턴
  if (nums.length === 1) return nums[0];

  // DP 배열 생성
  let dp = new Array(nums.length);

  // 초기값 설정
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // DP를 이용해 최대 수익 계산
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // 마지막 값이 최대 수익
  return dp[nums.length - 1];
};
