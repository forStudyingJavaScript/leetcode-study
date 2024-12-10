/**
 * 29m41s 소요
 *
 * 시간복잡도: O(2^n)
 *
 * 주어진 숫자 배열에서 합이 target이 되는 모든 조합을 구하는 문제입니다.
 *
 * 백트래킹을 사용하여 모든 조합을 구합니다.
 * 현재 합이 target과 같으면 결과 배열에 추가합니다.
 * 현재 합이 target보다 크면 더 이상 탐색하지 않습니다.
 * 현재 합이 target보다 작으면 다음 인덱스부터 탐색합니다.
 * 탐색이 끝나면 결과 배열을 반환합니다.
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (current, remain, start) => {
    if (remain === 0) {
      result.push([...current]);
      return;
    }
    if (remain < 0) return;

    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(current, remain - candidates[i], i); // 같은 위치에서 다시 시작
      current.pop(); // 탐색이 끝난 후 원래 상태로 복구
    }
  };

  backtrack([], target, 0);
  return result;
};
