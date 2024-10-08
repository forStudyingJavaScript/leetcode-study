/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let bit = n.toString(2);

  return [...bit].reduce((acc, cur) => (cur === '1' ? (acc += +cur) : acc), 0);
};
