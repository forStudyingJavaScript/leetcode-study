/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let n = intervals.length;

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let cur = intervals[0];

  for (let i = 1; i < n; i++) {
    if (cur[1] >= intervals[i][0]) cur[1] = Math.max(cur[1], intervals[i][1]);
    else {
      result.push(cur);
      cur = intervals[i];
    }
  }

  result.push(cur);

  return result;
};
