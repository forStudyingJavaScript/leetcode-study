/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = 0;
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  while (x !== 0) {
    let digit = x % 10;
    x = (x - digit) / 10;

    num = num * 10 + digit;

    if (num < INT_MIN || num > INT_MAX) {
      return 0;
    }
  }

  return num;
};

// Time taken : 30m+
// Runtime : 59ms (73ms)
// Memory : 53.55MB
