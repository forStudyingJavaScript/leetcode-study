/**
 * 37m26s 소요
 *
 * 시간복잡도: O(n^2)
 *
 * 그래프 형태로 주어진 배열에서 k번 노드에서 모든 노드로 가는 최단 시간을 구하는 문제입니다.
 *
 * 어떻게 풀어야 할지 감이 잘 안와서 풀이랑 GPT의 도움을 받았습니다.
 * 다익스트라 알고리즘을 사용하면 풀 수 있다고 합니다.
 *
 * 다익스트라 알고리즘은 최단 경로를 찾는 알고리즘 중 하나입니다.
 * 시작 노드에서 다른 노드로 가는 최단 경로를 찾을 때 사용합니다.
 *
 * 그래프를 초기화합니다.
 * 다익스트라 알고리즘을 사용하여 최단 경로를 찾습니다.
 * 최단 경로 배열 중 최대값을 찾아 반환합니다.
 */
var networkDelayTime = function (times, n, k) {
  const graph = new Map(); // 그래프 생성

  // 그래프 초기화
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  for (let [u, v, w] of times) {
    graph.get(u).push([v, w]);
  }

  // 다익스트라 알고리즘
  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;

  const pq = new MinPriorityQueue({ priority: (x) => x[1] }); // [노드, 거리]
  pq.enqueue([k, 0]);

  // 우선순위 큐에서 노드를 꺼내면서 최단 거리 갱신
  while (!pq.isEmpty()) {
    const [current, time] = pq.dequeue().element;

    // 현재 노드의 거리가 최단 거리보다 크면 무시
    if (time > dist[current]) continue;

    // 인접 노드를 순회하며 최단 거리 갱신
    for (let [neighbor, weight] of graph.get(current)) {
      const newTime = time + weight;

      // 최단 거리 갱신
      if (newTime < dist[neighbor]) {
        dist[neighbor] = newTime;
        pq.enqueue([neighbor, newTime]);
      }
    }
  }

  // 최종 거리 배열에서 최대값 확인
  const result = Math.max(...dist.slice(1)); // 1번 노드부터 n번 노드까지
  return result === Infinity ? -1 : result;
};
