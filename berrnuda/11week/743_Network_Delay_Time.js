/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const node = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) node[u].push([v, w]);

  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;

  const visited = new Array(n + 1).fill(false);

  for (let i = 1; i <= n; i++) {
    let minNode = -1;
    for (let j = 1; j <= n; j++) {
      if (!visited[j] && (minNode === -1 || dist[j] < dist[minNode]))
        minNode = j;
    }

    if (dist[minNode] === Infinity) break;

    visited[minNode] = true;

    for (const [neighbor, weight] of node[minNode]) {
      const newDist = dist[minNode] + weight;
      if (newDist < dist[neighbor]) dist[neighbor] = newDist;
    }
  }

  const maxDist = Math.max(...dist.slice(1));
  return maxDist === Infinity ? -1 : maxDist;
};
