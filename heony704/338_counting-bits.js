/**
 * https://leetcode.com/problems/counting-bits/
 * 21m
 *
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const counts = [0];

  let arr = [1];
  let index = 0;

  for (let i = 0; i < n; i++) {
    if (arr.length <= index) {
      const plused = arr.map((x) => x + 1);
      arr = arr.concat(plused);
      index = 0;
    }

    counts.push(arr[index]);
    index++;
  }

  return counts;
};
