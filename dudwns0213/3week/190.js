/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 *
 * 비트를 반전시키는 문제이다!
 *
 * 풀이 방법 자체는 굉장히 간단한 듯?
 *
 * 비트를 입력한다 -> 32비트이므로 루프는 32번 돌면 될듯?
 * 근데 굳이 지정하지 않고 계속 돌려도 어차피 끝이 나지 않을까 한다... 하지만 지정해야 성능이 좋을 것
 *
 * 정수의 비트들을 반전시키면 되는 것 같다...?
 *
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // 결과를 왼쪽으로 시프트하여 비트를 추가할 자리를 만듭니다.
    result <<= 1;
    // n의 마지막 비트를 가져옵니다.
    result |= n & 1;
    // n을 오른쪽으로 시프트하여 다음 비트를 준비합니다.
    n >>= 1;
  }
  // 부호 없는 32비트 정수로 변환하여 반환합니다.
  return result >>> 0;
};
