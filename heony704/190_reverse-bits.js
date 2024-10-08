/**
 * https://leetcode.com/problems/reverse-bits/
 * 25m
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let answer = 0;

  for (let i = 0; i < 32; i++) {
    // answer를 왼쪽으로 이동시킨 후, n의 마지막 비트를 추가
    answer = (answer << 1) | (n & 1);

    // n을 오른쪽으로 shift
    n >>= 1;
  }

  // 부호 없는 정수로 변환
  return answer >>> 0;
};

// answer를 문자열로 만들어서 계산했다가 다시 숫자로 변환하는 풀이 => 개선 가능
var reverseBits = function (n) {
  let answer = "";

  // n의 비트를 answer로 이동
  for (let i = 0; i < 32; i++) {
    if (n & 1) {
      answer += "1";
    } else {
      answer += "0";
    }

    n >>= 1;
  }

  // answer를 문자열로 저장하지 않고 바로 숫자로 처리할 수 있는 방법 없나?
  return parseInt(answer, 2);
};
