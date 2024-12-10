/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;

  const reversed = Math.abs(x).toString().split("").reverse().join("");

  const result = Number(reversed);

  // 32비트 범위를 넘어가는지 확인 최소값보다 더 작거나 최대값보다 더 큰 경우
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0;

  return isNegative ? -result : result;
};

// time: 18m 43s
