/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0;

  [...n.toString(2)].forEach((each) => {
    if (each === "1") result++;
  });

  return result;
};

console.log(hammingWeight(2147483645));
