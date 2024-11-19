/**
 * https://leetcode.com/problems/sum-of-two-integers/
 * 7m (x)
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    // XOR을 통해 합 (자리 올림 없는 합)
    let sum = a ^ b;
    // AND를 통해 자리 올림을 구한 뒤, 왼쪽으로 한 칸 이동
    let carry = (a & b) << 1;

    // a는 자리 올림 없는 합으로 업데이트
    // b는 자리 올림으로 업데이트
    a = sum;
    b = carry;
  }

  return a;
};
