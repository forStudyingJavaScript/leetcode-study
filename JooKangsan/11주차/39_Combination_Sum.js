/**
 * @param {number[]} candidates 숫자 배열
 * @param {number} target 목표 합
 * @return {number[][]} 가능한 모든 조합을 담은 2차원 배열
 */
var combinationSum = function (candidates, target) {
  const result = [];

  // remain: 남은 값
  // path: 조합 가능한 배열
  // start:시작할 인덱스 위치
  function backtrack(remain, path, start) {
    if (remain === 0) {
      // 남은 값이 0이면 조합한 배열을 결과에 추가
      result.push([...path]);
      return;
    }

    // 남은 값이 음수면 유효하지 않은 조합 아무것도 반환하지 않음
    if (remain < 0) {
      return;
    }

    // start부터 시작해서 모든 후보 숫자 시도
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);

      // 재귀 호출:
      // - remain에서 현재 숫자를 뺌
      // - 조합중인 배열을 전달
      // - i를 시작할 인덱스 위치 전달 (같은 숫자 재사용 가능)
      backtrack(remain - candidates[i], path, i);

      // 다 쓴 인덱스를 candidates에서 제거
      path.pop();
    }
  }

  // 초기 호출:
  backtrack(target, [], 0);
  return result;
};
