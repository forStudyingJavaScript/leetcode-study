/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // 문제이해: 숫자 리스트와 n, k가 입력된다. k부터 시작해서 모든 노드에 신호를 보내는데 걸리는 최소 시간을 구한다 모든 노드에 도달할 수 없다면 -1
  // times[i] = (ui, vi, wi) 이 형태를 보고 그래프 자료구조임을 파악할 수 있다.
  // 시작점 하나 + 모든 노드까지의 최단 거리/시간 + 양의 가중치, 이 조건으로 그리디 알고리즘 중 다익스트라 알고리즘을 사용할 수 있다.

  // 1. 그래프 생성
  const graph = new Map();

  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  // console.log(graph)
  // Map(4) { 1 => [], 2 => [], 3 => [], 4 => [] }

  for (const [u, v, w] of times) {
    graph.get(u).push([v, w]);
  }
  // console.log(graph)
  // Map(3) { 1 => [], 2 => [ [ 1, 1 ], [ 3, 1 ] ], 3 => [ [ 4, 1 ] ] }

  // 2. 거리 배열 초기화
  const distances = new Array(n + 1).fill(Infinity);
  distances[k] = 0;

  // console.log(distances)
  // [ Infinity, Infinity, 0, Infinity, Infinity ]

  // 3. 방문 배열 초기화
  const visited = new Array(n + 1).fill(false);
  // console.log(visited)
  // [ false, false, false, false, false ]

  // 4. 다익스트라 알고리즘 구현
  for (let i = 1; i <= n; i++) {
    // 4-1. 현재 최단 거리인 노드 찾기
    let minDist = Infinity;
    let minNode = -1;
    for (let node = 1; node <= n; node++) {
      if (!visited[node] && distances[node] < minDist) {
        minDist = distances[node];
        minNode = node;
      }
    }

    // 4-2. 도달할 수 없는 노드가 있는 경우
    if (minNode === -1) break;

    // 4-3. 노드 방문 처리
    visited[minNode] = true;

    // 4-4. 인접한 노드들의 거리 갱신
    for (const [nextNode, time] of graph.get(minNode)) {
      const newDist = distances[minNode] + time;
      if (newDist < distances[nextNode]) {
        distances[nextNode] = newDist;
      }
    }
  }

  // 5. 결과 계산
  let maxDist = 0;
  for (let i = 1; i <= n; i++) {
    if (distances[i] === Infinity) return -1;
    maxDist = Math.max(maxDist, distances[i]);
  }

  return maxDist;
};

// time: 1h 14m
