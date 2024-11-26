/**
 * 36m21s 소요
 *
 * 시간복잡도: O(n)
 *
 * 집이 원형으로 배치되어 있고 각 집에는 돈이 들어있습니다. 인접한 두 집을 털면 경보가 울립니다. 경보를 울리지 않고 가장 많은 돈을 훔치는 문제입니다.
 *
 * 어떻게 풀어야 할지 감이 잡히지 않아서 풀이를 참고했습니다.
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]; // 집이 한 개인 경우 집을 털고 종료

  const dp = Array(nums.length).fill(0); // 첫 번째 집을 턴 경우
  const dp2 = Array(nums.length).fill(0); // 첫 번째 집을 털지 않은 경우

  dp[0] = nums[0]; // 첫 번째 집을 털었을 때의 금액
  dp[1] = Math.max(nums[0], nums[1]); // 첫 번째 혹은 두 번째 집을 털었을 때 최대 금액

  dp2[0] = 0; // 첫 번째 집을 털지 않으므로 0
  dp2[1] = nums[1]; // 두 번째 집을 털었을 때의 금액

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]); // 첫 번째 집을 털었을 때의 최대 금액
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]); // 첫 번째 집을 털지 않았을 때의 최대 금액
  }

  // 첫 번째 집을 털었을 때와 첫 번째 집을 털지 않았을 때 중 최대 금액을 반환
  return Math.max(dp[nums.length - 2], dp2[nums.length - 1]);
};
