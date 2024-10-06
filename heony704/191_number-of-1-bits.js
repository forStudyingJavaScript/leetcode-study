/**
 * https://leetcode.com/problems/number-of-1-bits/
 * 5:48
 *
 * @param {number} n
 * @return {number}
 */
// 좀 더 발전된 풀이
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    // 마지막 비트가 1이면 count 증가
    count += n & 1;
    // n을 오른쪽으로 1비트 시프트
    n = n >>> 1;
  }
  return count;
};

// 내 풀이
var hammingWeight = function (n) {
  const binary = n.toString(2);

  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) count++;
  }

  return count;
};
