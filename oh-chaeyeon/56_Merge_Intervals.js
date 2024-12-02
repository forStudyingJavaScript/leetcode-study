/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];

    if (current[0] <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        current[1]
      );
    } else {
      merged.push(current);
    }
  }

  return merged;
};

// Time taken : 23m 25s
// Runtime : 7ms
// Memory : 59.04MB
