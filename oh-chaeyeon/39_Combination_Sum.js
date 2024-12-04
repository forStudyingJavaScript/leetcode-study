/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const dp = Array.from({ length: target + 1 }, () => []);
  dp[0] = [[]];

  for (let i = 0; i < candidates.length; i++) {
    for (let j = candidates[i]; j <= target; j++) {
      const combinations = dp[j - candidates[i]];
      for (const combination of combinations) {
        dp[j].push([...combination, candidates[i]]);
      }
    }
  }

  return dp[target];
};

// Time taken : 33m 36s
// Runtime : 6ms
// Memory : 57.15MB
