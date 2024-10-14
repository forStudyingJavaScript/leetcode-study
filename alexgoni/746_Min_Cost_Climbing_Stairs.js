// 😢

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const stairMinCost = Array.from({ length: cost.length }, () => 0);

  stairMinCost[0] = cost[0];
  stairMinCost[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    if (stairMinCost[i - 1] >= stairMinCost[i - 2]) {
      stairMinCost[i] = stairMinCost[i - 2] + cost[i];
    } else stairMinCost[i] = stairMinCost[i - 1] + cost[i];
  }

  return Math.min(
    stairMinCost[stairMinCost.length - 1],
    stairMinCost[stairMinCost.length - 2]
  );
};
