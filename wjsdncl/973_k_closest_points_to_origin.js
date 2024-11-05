/**
 * 21m 16s 소요
 *
 * 시간복잡도: O(n log n)
 *
 * 1. 배영의 요소를 x^2 + y^2를 기준으로 정렬합니다.
 * 2. 가장 k개의 요소를 반환합니다.
 */
var kClosest = function (points, k) {
  return points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)).slice(0, k);
};
