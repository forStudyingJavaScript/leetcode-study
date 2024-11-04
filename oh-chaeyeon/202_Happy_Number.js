/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const record = new Set();

  while (n !== 1) {
    if (record.has(n)) {
      return false;
    }
    record.add(n);

    n = n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + digit * digit, 0);
  }
  return true;
};

// Time taken : 20m 6s
// Runtime : 55ms
// Memory : 50.80MB
