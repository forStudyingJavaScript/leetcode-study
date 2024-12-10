/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const sign = x < 0;
  const rev = parseInt(String(Math.abs(x)).split("").reverse().join(""));

  if (rev < -Math.pow(2, 31) || rev > Math.pow(2, 31) - 1) return 0;

  return sign ? -rev : rev;
};
