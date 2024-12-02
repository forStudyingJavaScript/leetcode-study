/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (i < intervals.length - 1) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals.splice(i, 2, [
        intervals[i][0],
        Math.max(intervals[i][1], intervals[i + 1][1]),
      ]);
    } else {
      i++;
    }
  }

  return intervals;
};
