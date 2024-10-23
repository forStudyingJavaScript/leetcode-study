/**
 * 21m44s 소요
 *
 * 1. sort()로 내림차순 정렬한다.
 * 2. 가장 큰 두개를 빼고 뺀 값이 0이 아니면 다시 배열에 넣는다.
 * 3. 2를 반복한다. 배열의 길이가 1이하면 종료한다.
 * 4. 배열의 길이가 0이면 0을 반환하고 아니면 배열의 첫번째 값을 반환한다.
 */
var lastStoneWeight = function (stones) {
  // 내림차순 정렬 후 가장 큰 두개를 빼고 뺀 값이 0이 아니면 다시 배열에 넣는다. (O(n^2))
  while (stones.length > 1) {
    // 내림차순 정렬 (O(n log n))
    stones.sort((a, b) => b - a);

    // 가장 큰 두개를 빼고 뺀 값이 0이 아니면 다시 배열에 넣는다. (O(n))
    const first = stones.shift();
    const second = stones.shift();

    // 뺀 값이 0이 아니면 다시 배열에 넣는다.
    if (first !== second) {
      stones.push(first - second);
    }
  }

  return stones.length ? stones[0] : 0;
};
