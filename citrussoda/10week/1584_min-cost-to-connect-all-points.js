/**
 * @param {number[][]} points
 * @return {number}
 */
// Prim's Algorithm
var minCostConnectPoints = function (points) {
  const n = points.length;

  // 방문 여부를 체크하는 배열
  const visited = new Set();

  // 각 점까지의 최소 거리를 저장하는 배열
  const distances = new Array(n).fill(Infinity);
  distances[0] = 0;

  let totalCost = 0;

  for (let i = 0; i < n; i++) {
    let minDist = Infinity;
    let minIndex = -1;

    // 아직 방문하지 않은 점들 중에서 최소 거리를 가진 점을 찾음
    for (let j = 0; j < n; j++) {
      if (!visited.has(j) && distances[j] < minDist) {
        minDist = distances[j];
        minIndex = j;
      }
    }

    visited.add(minIndex);
    totalCost += minDist;

    // 선택된 점에서 다른 모든 점까지의 거리를 업데이트
    for (let j = 0; j < n; j++) {
      if (!visited.has(j)) {
        const distance =
          Math.abs(points[minIndex][0] - points[j][0]) +
          Math.abs(points[minIndex][1] - points[j][1]);
        distances[j] = Math.min(distances[j], distance);
      }
    }
  }

  return totalCost;
};
