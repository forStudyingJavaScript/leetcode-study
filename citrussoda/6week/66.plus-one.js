/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let ans = [];

  let plusOne = BigInt(digits.toString().split(',').join('')) + 1n;

  ans = plusOne.toString().split('').map(Number);

  return ans;
};
