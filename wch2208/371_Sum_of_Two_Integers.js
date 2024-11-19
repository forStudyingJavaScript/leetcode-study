/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    // 캐리를 저장
    let carry = (a & b) << 1;
    // 캐리를 제외한 덧셈 수행
    a = a ^ b;
    // 다음 반복을 위해 b를 캐리값으로 업데이트
    b = carry;
  }
  return a;
};

// time: 32m
// memory: 48.80MB
