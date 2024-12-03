/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let l = digits.length;

  for (let i = l - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] == 10) digits[i] = 0;
    else return digits;
  }

  digits.unshift(1);

  return digits;
};
