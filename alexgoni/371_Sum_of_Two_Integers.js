// 😢

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let x = a;
  let y = b;

  while (y !== 0) {
    const sumWithoutCarry = x ^ y;
    const carry = (x & y) << 1;

    x = sumWithoutCarry;
    y = carry;
  }
  return x;
};
