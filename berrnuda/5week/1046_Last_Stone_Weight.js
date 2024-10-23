/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  for (; stones.length > 1; ) {
    stones.sort((a, b) => b - a);

    let first = stones[0];
    let second = stones[1];

    stones.splice(0, 2);

    if (first !== second) {
      stones.push(first - second);
    }
  }

  return stones.length === 0 ? 0 : stones[0];
};

// Memory:   50.41 MB Beats 76.77%

// 8m 2s
