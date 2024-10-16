/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const visited = {};

  while (true) {
    let sum = 0;
    [...String(n)].forEach((str) => {
      sum += Number(str) ** 2;
    });

    if (sum === 0) return true;
    if (visited[sum]) return false;

    visited[sum] = true;
    n = sum;
  }
};
