/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const join = BigInt(digits.join("")) + 1n;
  return join.toString().split("").map(Number);
};
