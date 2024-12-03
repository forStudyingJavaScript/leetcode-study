/**
 * 32m31s 소요
 *
 * 시간복잡도 : O(n) (n: intervals의 길이)
 *
 * 구간들의 배열과 새로운 구간이 주어질 때, 구간들을 병합한 결과를 반환하는 문제입니다.
 *
 * 구간들을 순회하면서 새로운 구간과 겹치는 구간을 병합합니다.
 * 새로운 구간이 구간들보다 클 때까지 구간들을 병합합니다.
 * 새로운 구간이 구간들보다 작을 때까지 구간들을 병합합니다.
 * 나머지 구간들을 결과에 추가합니다.
 * 결과를 반환합니다.
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;

  // newInterval 이전의 겹치지 않는 구간 추가
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // newInterval과 겹치는 구간 병합
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval); // 병합된 구간 추가

  // newInterval 이후의 겹치지 않는 구간 추가
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
