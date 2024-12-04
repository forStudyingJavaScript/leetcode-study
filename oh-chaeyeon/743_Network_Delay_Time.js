/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const minTime = new Array(n + 1).fill(Infinity);
  minTime[k] = 0;

  for (let i = 1; i < n; i++) {
    for (const [u, v, w] of times) {
      if (minTime[u] !== Infinity && minTime[u] + w < minTime[v]) {
        minTime[v] = minTime[u] + w;
      }
    }
  }

  const maxTime = Math.max(...minTime.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
};

// Time taken : 1h 20m
// Runtime : 103ms
// Memory : 57.07MB
