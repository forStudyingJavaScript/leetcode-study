/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const minCost = new Array(n + 1).fill(0);

  minCost[0] = 0;
  minCost[1] = cost[0];

  for (let i = 2; i <= n; i++) {
    minCost[i] = cost[i - 1] + Math.min(minCost[i - 1], minCost[i - 2]);
  }

  return Math.min(minCost[n], minCost[n - 1]);
};
