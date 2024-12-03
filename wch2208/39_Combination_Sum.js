/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const findCombinations = (remaining, current, start) => {
    // 종료조건
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    if (remaining < 0) return;

    // 현재 단계에서 할 일
    for (let i = start; i < candidates.length; i++) {
      // 1. 현재 숫자를 선택
      current.push(candidates[i]);

      // 2. 이 숫자를 선택한 상태에서 재귀 호출
      findCombinations(remaining - candidates[i], current, i);

      // 3. 백트래킹: 현재 숫자를 제거하고 다른 가능성 시도
      current.pop();
    }
  };

  findCombinations(target, [], 0);

  return result;
};

// time: 44m
