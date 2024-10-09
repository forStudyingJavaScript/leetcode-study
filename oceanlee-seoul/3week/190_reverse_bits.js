/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// Runtime: 63ms
var reverseBits = function (n) {
  // 32비트 보장을 위해 32 자리수로 앞을 '0'으로 채움
  const binaryStr = n.toString(2).padStart(32, '0');
  // reverse()로 뒤집~!
  const reverseBinaryStr = [...binaryStr].reverse().join('');

  return parseInt(reverseBinaryStr, 2);
};
