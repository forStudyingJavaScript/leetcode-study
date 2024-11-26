/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  const dist = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  dist[0] = 0;
  let cost = 0;

  for (let i = 0; i < n; i++) {
    let minCost = Infinity;
    let currentNode = -1;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && dist[j] < minCost) {
        minCost = dist[j];
        currentNode = j;
      }
    }

    visited[currentNode] = true;
    cost += minCost;

    for (let nextNode = 0; nextNode < n; nextNode++) {
      if (!visited[nextNode]) {
        const manhattanDistance =
          Math.abs(points[currentNode][0] - points[nextNode][0]) +
          Math.abs(points[currentNode][1] - points[nextNode][1]);
        dist[nextNode] = Math.min(dist[nextNode], manhattanDistance);
      }
    }
  }

  return cost;
};

// Time taken : 1h+
// Runtime : 33ms
// Memory : 52.37MB
