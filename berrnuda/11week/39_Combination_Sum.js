/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const stack = [[[], 0, 0]];

  while (stack.length > 0) {
    const [currentCombination, currentSum, startIndex] = stack.pop();

    if (currentSum === target) {
      result.push(currentCombination);
      continue;
    }

    if (currentSum > target) continue;

    for (let i = startIndex; i < candidates.length; i++) {
      stack.push([
        [...currentCombination, candidates[i]],
        currentSum + candidates[i],
        i,
      ]);
    }
  }

  return result;
};
