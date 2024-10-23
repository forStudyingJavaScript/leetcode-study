/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 만약 계단이 1개 이하라면 그 자체가 답
  if (n <= 2) return n;

  // dp 배열 생성, dp[i]는 i번째 계단에 도달하는 방법의 수
  const dp = new Array(n + 1);

  dp[1] = 1; // 1계단을 오르는 방법은 1가지
  dp[2] = 2; // 2계단을 오르는 방법은 2가지

  // dp 배열을 채워 나감
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // f(n) = f(n-1) + f(n-2)
  }

  return dp[n]; // n번째 계단에 도달하는 방법의 수 반환
};
