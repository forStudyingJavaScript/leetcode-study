/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);

    const y = stones.pop();
    const x = stones.pop();

    if (x !== y) {
      stones.push(y - x);
    }
  }

  return stones.length ? stones[0] : 0;
};
