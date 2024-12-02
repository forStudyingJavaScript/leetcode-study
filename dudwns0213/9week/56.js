/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * intervals 배열에서 interval[i] = [start, end] 의 경우 시작점, 끝 점
 * 겹치는 구간을 병합해서 겹치지 않는 구간의 배열을 반환해야 하는 문제!
 *
 * 정렬 후 병합하는 방법, 스위핑을 하는 방법 2가지가 존재한다고 한다.
 */

var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  // 오름차순 정렬

  const result = [];

  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (currentInterval[1] >= start) {
      currentInterval[1] = Math.max(currentInterval[1], end);
    } else {
      result.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  result.push(currentInterval);

  return result;
};
