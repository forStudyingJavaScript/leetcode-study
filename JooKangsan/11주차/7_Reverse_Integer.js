/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // x를 절대값으로 변경후 순서를 역전시킴 123 -> 321
  var result = Number(String(Math.abs(x)).split("").reverse().join(""));
  // 결과값이 32비트 정수로 표현하지 못할경우 0
  if (result > 2147483647) return 0;
  // x 값이 음수일경우 결과값에 -를 붙여서 내보냄
  return x > 0 ? result : -result;
};
