/**
 * https://leetcode.com/problems/last-stone-weight/
 * 10m
 *
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    // 돌들을 내림차순 정렬
    stones.sort((a, b) => b - a);

    // 무거운 두 돌덩이 꺼내서
    const first = stones.shift();
    const second = stones.shift();

    // 두 돌 무게가 다르다면, 큰 덩이 - 작은 덩이 추가
    if (first !== second) stones.push(first - second);
  }

  // 남은 돌 무게 반환, 없으면 0 반환
  return stones.length < 1 ? 0 : stones[0];
};
