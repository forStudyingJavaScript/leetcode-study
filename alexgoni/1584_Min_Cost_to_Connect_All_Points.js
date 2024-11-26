/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  const visited = Array(n).fill(false);
  const minDist = Array(n).fill(Infinity);
  minDist[0] = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    let currMin = Infinity;
    let currNode = -1;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && minDist[j] < currMin) {
        currMin = minDist[j];
        currNode = j;
      }
    }

    visited[currNode] = true;
    result += currMin;

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        const cost =
          Math.abs(points[currNode][0] - points[j][0]) +
          Math.abs(points[currNode][1] - points[j][1]);
        minDist[j] = Math.min(minDist[j], cost);
      }
    }
  }

  return result;
};
