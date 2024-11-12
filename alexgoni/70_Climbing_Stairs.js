/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = 0;

  for (let i = 0; i <= n / 2; i++) {
    const count2 = i;
    const count1 = n - 2 * count2;

    result += combination(count1 + count2, count2);
  }

  return result;
};

function combination(n, r) {
  let result = 1;

  for (let i = 0; i < r; i++) result *= n - i;
  for (let i = 1; i <= r; i++) result /= i;

  return result;
}
