/**
 * 17m26s 소요
 *
 * 시간복잡도 : O(n log n)
 *
 * O(n)으로 풀 수 있는거 같은데 잘 모르겠습니다.
 *
 * 1. 0부터 n까지의 수를 이진수로 변환한다.
 * 2. 0의 개수를 세고 배열에 저장한다.
 * 3. 배열을 반환한다.
 */
var countBits = function (n) {
  const result = [];

  // 0부터 n까지 반복 (O(n))
  for (let i = 0; i <= n; i++) {
    // 이진수로 변환 후 0의 개수를 세어 배열에 저장 (O(log n))
    result.push(i.toString(2).replace(/0/g, "").length);
  }

  return result;
};
