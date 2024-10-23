/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // dp[i] = dp[i-1] + dp[i-2]
  if (n <= 2) return n;

  let dp1 = 1;
  let dp2 = 2;

  for (let i = 3; i <= n; i++) {
    let temp = dp1 + dp2;
    dp1 = dp2;
    dp2 = temp;
  }

  return dp2;
};

// Runtime:  0 ms     Beats 100.00%
// Memory:   48.76 MB Beats 52.62%

// 3m 11s
