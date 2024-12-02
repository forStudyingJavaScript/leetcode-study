/**
 * 371. Sum of Two Integers
 * Medium
 *
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 *
 * -1000 <= a, b <= 1000
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // 비트 연산 사용
  /**
   *
   *  XOR  :각 비트를 비교하여, 두 비트가 서로 다르면 1을 반환하고, 같으면 0을 반환
   *        === carry(올림)를 무시한 덧셈과 동일한 결과
   *
   *  AND  :두 비트가 모두 1인 경우
   *
   *  자리올림은 두 비트가 모두 1일때 발생하므로 AND 연산을 통해서 이를 확인하고, 두 비트가 모두 1일 경우 자리올림 수행 (<<)
   *
   */

  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};
