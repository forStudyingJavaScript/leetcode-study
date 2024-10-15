/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // let count = 0;
  // coins = coins.sort((a, b) => b - a);

  // for (let i = 0; i < coins.length; i++) {
  //   if (amount >= coins[i]) {
  //     count += Math.floor(amount / coins[i])
  //     amount = amount % coins[i]
  //   }

  //   if (amount === 0) return count;
  // }

  // return -1;

  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

// Runtime:  100 ms   Beats 58.10%
// Memory:   54.62 MB Beats 68.70%

// 10m 52s
