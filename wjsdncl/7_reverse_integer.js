/**
 * 14m51s 소요
 *
 * 시간복잡도 : O(log n) (n: x의 길이)
 *
 * 32비트 정수 x를 뒤집어서 반환하는 문제입니다.
 *
 * 32비트 정수의 범위를 벗어나면 0을 반환합니다.
 * 숫자를 문자열로 변환하여 뒤집은 뒤, 다시 숫자로 변환합니다.
 * 32비트 정수 범위를 벗어나는지 확인합니다.
 * 음수인 경우 부호를 복원합니다.
 */
var reverse = function (x) {
  const isNegative = x < 0; // 음수 여부 확인
  const reversed = parseInt(Math.abs(x).toString().split("").reverse().join("")); // 절댓값 뒤집기

  if (reversed > 2 ** 31 - 1) return 0; // 32비트 정수 범위 확인

  return isNegative ? -reversed : reversed; // 부호 복원
};
