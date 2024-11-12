/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    let maxIdx, secondMaxIdx;
    if (stones[0] >= stones[1]) {
      maxIdx = 0;
      secondMaxIdx = 1;
    } else {
      maxIdx = 1;
      secondMaxIdx = 0;
    }

    for (let i = 2; i < stones.length; i++) {
      if (stones[maxIdx] <= stones[i]) {
        secondMaxIdx = maxIdx;
        maxIdx = i;
      } else if (stones[secondMaxIdx] < stones[i]) {
        secondMaxIdx = i;
      }
    }

    if (stones[maxIdx] === stones[secondMaxIdx]) {
      stones = stones.filter(
        (_, idx) => idx !== maxIdx && idx !== secondMaxIdx
      );
    } else {
      stones[maxIdx] = stones[maxIdx] - stones[secondMaxIdx];
      stones.splice(secondMaxIdx, 1);
    }
  }

  return stones.length > 0 ? stones[0] : 0;
};
