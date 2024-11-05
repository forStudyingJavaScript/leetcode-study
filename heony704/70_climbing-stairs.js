/**
 * https://leetcode.com/problems/climbing-stairs/
 * 18m
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const sequence = [1, 2];

  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  return sequence[n - 1];
};
