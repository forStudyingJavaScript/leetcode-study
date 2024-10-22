/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 2;
  let prev2 = 1;

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};

// Time taken : 16m 30s
// Runtime : 0ms
// Memory : 49.04MB
