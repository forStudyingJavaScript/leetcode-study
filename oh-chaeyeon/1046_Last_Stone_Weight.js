/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    const big1 = stones.shift();
    const big2 = stones.shift();

    if (big1 !== big2) {
      stones.push(big1 - big2);
    }
  }

  return stones.length === 0 ? 0 : stones[0];
};

// Time taken : 7m 51s
// Runtime : 2ms
// Memory : 51.29MB
