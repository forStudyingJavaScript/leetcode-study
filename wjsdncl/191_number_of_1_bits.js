/**
 * 14m32s 소요
 *
 * 시간복잡도: O(n) n = 1의 개수
 *
 * 비트 연산자를 사용하는게 오랜만이라 기억이 안나서 찾아보았습니다.
 * 찾아보면서 Brian Kernighan's 알고리즘을 알게 되었습니다.
 * 이 알고리즘은 n과 n-1을 AND 연산하면 1의 개수가 1개 줄어든다는 것을 이용합니다.
 *
 * n이 0이 될 때까지 n과 n-1을 AND 연산하고, 1의 개수를 세어 반환합니다.
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    n &= n - 1;
    count++;
  }

  return count;
};
