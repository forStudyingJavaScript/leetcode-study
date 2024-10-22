/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bit = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    bit[i] = bit[i >> 1] + (i & 1);
  }
  return bit;
};

// Time taken : 16m
// Runtime : 2ms
// Memory : 56.14MB
