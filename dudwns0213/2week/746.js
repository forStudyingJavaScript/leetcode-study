/**
 * @param {number[]} cost
 * @return {number}
 *
 * 계단의 최상단에 꼭 가야 할까...?
 *
 * 배열로 할려고 했는데 너무 머리가 아파서 구글링의 힘을 빌렸습니다,,, DP는 처음이라 조금 어렵네요...
 * -1 혹은 -2 하는 부분(한 계단 전인가 두 계단 전인가)이 굉장히 중요하다고 생각됩니다 ㅠ.ㅠ
 *
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;

  const dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
};
