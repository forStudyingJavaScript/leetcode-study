/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs1 = function (cost) {
  const memo = {};

  const findMinCost = (i) => {
    if (i <= 1) return 0;
    if (memo[i] !== undefined) return memo[i];

    memo[i] = Math.min(
      findMinCost(i - 1) + cost[i - 1],
      findMinCost(i - 2) + cost[i - 2]
    );
    return memo[i];
  };

  return findMinCost(cost.length);
};

// Runtime:  54 ms    Beats 69.10%
// Memory:   50.97 MB Beats 16.89%

// 17m 1s

var minCostClimbingStairs2 = function (cost) {
  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }

  return Math.min(cost[0], cost[1]);
};

// Runtime:  60 ms    Beats 37.88%
// Memory:   49.24 MB Beats 86.98%

// 24m
