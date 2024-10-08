/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  const num = n.toString(2);
  let count = 0;

  for (let char of num) {
    if (char === "1") {
      count++;
    }
  }

  return count;
};
