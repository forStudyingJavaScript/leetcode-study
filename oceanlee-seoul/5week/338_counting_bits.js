/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    const tempArray = i
      .toString(2)
      .split('')
      .filter((v) => v === '1');
    result.push(tempArray.length);
  }

  return result;
};
