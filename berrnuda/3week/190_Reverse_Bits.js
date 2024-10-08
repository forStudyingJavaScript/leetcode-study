/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>>= 1;
  }

  return result >>> 0;
};

// Runtime:  63 ms    Beats 36.23%
// Memory:   50.85 MB Beats 67.17%

// 7m 36s
