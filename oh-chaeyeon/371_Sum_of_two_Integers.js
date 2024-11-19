/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  if (a === 0) return b;
  if (b === 0) return a;

  while (b != 0) {
    let sum = a ^ b;
    let carry = (a & b) << 1;

    a = sum;
    b = carry;
  }
  return a;
};

// Time taken : 15m 48s
// Runtime : 0ms
// Memory : 49.15MB
