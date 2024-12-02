/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const ans = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];

    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      ans.push(prev);
      prev = interval;
    }
  }

  ans.push(prev);
  return ans;
};
