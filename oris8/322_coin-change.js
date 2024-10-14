/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 각 금액마다 최소 동전 수를 업데이트
  // dp[i] = Math.min(dp[i], dp[i - coin] + 1)

  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  // 각 금액에 대해 동전 수 계산
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];

  // Runtime 89ms 79.42%
  // Memory 55.13MB 53.20%
};
