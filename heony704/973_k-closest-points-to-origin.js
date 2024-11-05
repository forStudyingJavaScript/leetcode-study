/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * 17m
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // 거리 계산
  const distances = [];
  for (const point of points) {
    distances.push([point[0] * point[0] + point[1] * point[1], point]);
  }

  // 정렬
  distances.sort((a, b) => a[0] - b[0]);

  // kClosest
  const ks = distances.slice(0, k).map((distance) => distance[1]);

  return ks;
};
