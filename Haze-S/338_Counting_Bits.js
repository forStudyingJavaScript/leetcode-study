/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
    arr.push(i.toString(2));
  }

  return arr.map((s) => (s === '0' ? 0 : s.match(/1/g)?.length));
};
