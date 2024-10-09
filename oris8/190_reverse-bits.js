/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const reversedStr = n
    .toString(2)
    .padStart(32, "0") // 32 bits
    .split("")
    .reverse()
    .join("");
  return parseInt(reversedStr, 2);

  // Runtime 59ms 56.54%
  // Memory 50.63MB 82.99%
};
