/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  return points
    .sort(
      ([x1, y1], [x2, y2]) =>
        Math.sqrt(x1 ** 2 + y1 ** 2) - Math.sqrt(x2 ** 2 + y2 ** 2)
    )
    .slice(0, k);
};
