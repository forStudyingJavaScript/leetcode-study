/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  const visited = new Array(n).fill(false);
  const minDist = new Array(n).fill(Infinity);
  minDist[0] = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    let x = -1;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && (x === -1 || minDist[j] < minDist[x])) {
        x = j;
      }
    }

    visited[x] = true;
    result += minDist[x];

    for (let k = 0; k < n; k++) {
      if (!visited[k]) {
        const dist =
          Math.abs(points[x][0] - points[k][0]) +
          Math.abs(points[x][1] - points[k][1]);
        minDist[k] = Math.min(minDist[k], dist);
      }
    }
  }

  return result;
};
