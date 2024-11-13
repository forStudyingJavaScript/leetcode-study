/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  points.sort((a, b) => {
    const A = a[0] * a[0] + a[1] * a[1];
    const B = b[0] * b[0] + b[1] * b[1];
    return A - B;
  });

  return points.slice(0, k);
};

// Time taken : 12m 42s
// Runtime : 34ms
// Memory : 62.73MB
