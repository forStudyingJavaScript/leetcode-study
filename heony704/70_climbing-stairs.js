/**
 * https://leetcode.com/problems/climbing-stairs/
 * 18m
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // n이 1이면 1, 2면 2 반환
  if (n < 3) return n;

  const sequence = [1, 2];

  for (let i = 2; i < n; i++) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(next);
  }

  return sequence[sequence.length - 1];
};
