/**
 * 19m54s 소요
 *
 * 시간복잡도: O(n)
 *
 * dp(동적 프로그래밍)를 사용해서 풀 수 있는 문제입니다.
 *
 * 1. dp 배열을 생성하고 0으로 초기화합니다.
 * 2. dp[0]과 dp[1]을 1로 초기화합니다.
 * 3. 2부터 n까지 반복하면서 dp[i] = dp[i - 1] + dp[i - 2]를 수행합니다.
 * 4. dp[n]을 반환합니다.
 */
var climbStairs = function (n) {
  // dp 배열을 생성하고 0으로 초기화
  const dp = Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  // 2부터 n까지 반복 (O(n))
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
