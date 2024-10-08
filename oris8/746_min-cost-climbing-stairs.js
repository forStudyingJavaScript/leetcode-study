/**
 * 24m 43s
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  // dp[n] = min(dp[n-1] + cost[n-1], dp[n-2] + cost[n-2])

  const { length } = cost;
  const costArray = Array.from({ length: length }, () => 0);

  for (let i = 0; i < length; i++) {
    if (i < 2) {
      costArray[i] = cost[i];
    } else {
      costArray[i] = cost[i] + Math.min(costArray[i - 1], costArray[i - 2]);
    }
  }

  return Math.min(costArray[length - 1], costArray[length - 2]);
};

// Runtime 59ms Beats 41.87%
// Memory 50.64MB Beats 34.58%
