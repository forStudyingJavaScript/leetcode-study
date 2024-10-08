/**
 * @param {number} n
 * @return {number}
 *
 * 숫자를 받을 시, 해당 숫자에 대한 2진수에서 1 비트에 대한 개수를 확인해서 반환하기
 *
 * 2진수로 변환 후(toString?) 거기서 연산을 할까 아니면 비트 연산을 할까?
 *
 * 전체적으로 비트만 신경쓰면 된다
 * >>> 기호를 사용해야 한다(기억이 잘 안 났다)
 *
 * 처음에는 2진수 쪽으로 헀는데 검색하니 Brian Kernighan의 알고리즘이 있어서 풀이법을 수정해보았다!
 * >>>를 사용하지 않아도 됨!
 *
 * 알고리즘을 사용한 풀이와 2진수 사용 풀이를 구분해보았다. 확실히... 알고리즘을 알면 도움이 되는구나...
 *
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    n = n & (n - 1);

    count++;
  }

  return count;
};

function hammingWeight(n) {
  const binary = n.toString(2);

  let count = 0;

  for (let char of binary) {
    if (char === "1") {
      count++;
    }
  }

  return count;
}
