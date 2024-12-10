/**
 * 38m17s 소요
 *
 * 시간 복잡도: O(N^2)
 *
 * 어떻게 풀어야 할지 감이 안와서 풀이와 GPT의 도움을 받았습니다.
 * Prim's Algorithm 또는 Kruskal's Algorithm 중 하나를 사용하여 풀 수 있다고 합니다.
 *
 * 모든 점들을 연결하는 최소 비용을 구하는 문제입니다.
 *
 * 시작점을 0으로 설정하고, 시작점에서 가장 가까운 점을 선택하여 MST에 추가합니다.
 * 이후 추가된 점에서 가장 가까운 점을 선택하여 MST에 추가합니다.
 * 이를 반복하여 모든 점을 연결할 때까지 반복합니다.
 * 최종적으로 MST에 추가된 비용의 합을 반환합니다.
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  const minCost = new Array(n).fill(Infinity); // 최소 비용 배열
  const visited = new Array(n).fill(false); // 방문 여부
  minCost[0] = 0; // 시작점의 비용은 0
  let totalCost = 0;

  // 모든 점을 연결할 때까지 반복
  for (let i = 0; i < n; i++) {
    let currMin = Infinity;
    let currPoint = -1;

    // 최소 비용으로 연결할 점 선택
    for (let j = 0; j < n; j++) {
      if (!visited[j] && minCost[j] < currMin) {
        currMin = minCost[j];
        currPoint = j;
      }
    }

    // 현재 점을 MST에 추가
    visited[currPoint] = true;
    totalCost += currMin;

    // 다른 점들의 최소 비용 업데이트
    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        const dist = Math.abs(points[currPoint][0] - points[j][0]) + Math.abs(points[currPoint][1] - points[j][1]);
        minCost[j] = Math.min(minCost[j], dist);
      }
    }
  }

  return totalCost;
};
