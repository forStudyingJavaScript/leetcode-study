/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  return findBit(n, 0);
};

const findBit = (n, count) => {
  if (n < 1) return count;

  let i = 1;
  while (i <= n / 2) {
    i *= 2;
  }
  count++;

  return findBit(n - i, count);
};
