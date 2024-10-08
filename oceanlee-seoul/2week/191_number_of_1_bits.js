/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split('')
    .filter((item) => item === '1').length;
};
