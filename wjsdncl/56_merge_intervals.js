/**
 * 21m41s 소요
 *
 * 시간복잡도: O(n log n)
 *
 * 배열의 모든 겹치는 구간을 병합하고 겹치지 않는 구간은 그대로 반환하는 문제입니다.
 *
 * 시작점을 기준으로 구간을 정렬하고, 결과 배열에 첫 구간을 넣어둡니다.
 * 그 다음 구간부터 시작점이 이전 구간의 끝점보다 작거나 같은 경우 두 구간을 병합하고,
 * 그렇지 않은 경우 결과 배열에 추가합니다.
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  // 시작점 기준으로 구간 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]]; // 초기 결과 배열

  for (let i = 1; i < intervals.length; i++) {
    const prev = result[result.length - 1]; // 결과 배열의 마지막 구간
    const curr = intervals[i]; // 현재 구간

    if (prev[1] >= curr[0]) {
      // 겹치는 경우 병합
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      // 겹치지 않는 경우 결과 배열에 추가
      result.push(curr);
    }
  }

  return result;
};
