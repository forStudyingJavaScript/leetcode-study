/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n;

  let a = 2;
  let b = 3;

  for (let i = 4; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
};
