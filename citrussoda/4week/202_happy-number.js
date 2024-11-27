/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let hash = new Map();

  while (!hash.has(n)) {
    hash.set(n, 1);

    let calc = n
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, i) => acc + i * i, 0);
    if (calc === 1) return true;

    n = calc;
  }

  return false;
};
