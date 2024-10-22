/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);

  while (stones.length > 1) {
    let max1 = stones.shift();
    let max2 = stones.shift();
    let newStone = max1 - max2;
    let index = stones.findIndex(stone => stone < newStone);

    if (index === -1) {
      stones.push(newStone);
    } else {
      stones.splice(index, 0, newStone);
    }
  }

  return stones.length === 1 ? stones[0] : 0;
};

// 49.44MB
// 39m
