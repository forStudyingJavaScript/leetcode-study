/**
 * 5m
 * @param {number} n - 양의 정수
 * @return {number} 정수의 이진 표현에서 1의 개수
 */
const hammingWeight = function (n) {
  // 1. filter 메서드 사용 : ...연산자, filter메서드에서 각각 메모리 사용
  // return [...n.toString(2)].filter((bit) => bit === "1").length;

  // 2. 정규표현식 사용: 정규표현식 과정에서 메모리 사용
  return n.toString(2).match(/1/g).length;

  // Runtime 50 ms Beats 87.92%
};
