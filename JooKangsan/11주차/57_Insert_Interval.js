/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // 1. newInterval 앞에 있는 구간들을 result에 추가
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 2. newInterval과 겹치는 구간들을 병합
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);

  // 3. newInterval 뒤에 있는 구간들을 result에 추가
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
