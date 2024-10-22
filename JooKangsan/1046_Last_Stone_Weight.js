/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    const first = stones.shift();
    const second = stones.shift();
    if (first !== second) {
      stones.push(first - second);
    }
  }
  return stones.length === 0 ? 0 : stones[0];
};
