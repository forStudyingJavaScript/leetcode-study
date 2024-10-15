/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * .padEnd() : 결과 문자열이 주어진 길이에 도달할 때까지 이 문자열의 끝(왼쪽)부분에 다른 문자열을 (필요하다면 여러 번) 채웁니다.
 */

var reverseBits = function (n) {
  var arr = n.toString(2).split("");
  var ans = arr.reverse().join("").padEnd(32, "0");
  ans = parseInt(ans, 2);
  return ans;
};
