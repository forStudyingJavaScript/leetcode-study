/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;
  while (index >= 0) {
    digits[index] += 1;
    if (digits[index] < 10) {
      return digits;
    }
    digits[index] = 0;
    index -= 1;
  }

  return [1, ...digits];
};
