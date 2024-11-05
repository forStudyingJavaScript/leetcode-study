/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let currentIndex = digits.length - 1;
  let last = digits[currentIndex];

  while (last === 9) {
    digits[currentIndex] = 0;
    if (currentIndex === 0) return [1, ...digits];

    currentIndex -= 1;
    last = digits[currentIndex];
  }

  digits[currentIndex] += 1;

  return digits;
};
