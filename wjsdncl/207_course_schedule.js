/**
 * 39m12s 소요
 *
 * 시간 복잡도: O(n + m) (n: numCourses, m: prerequisites.length)
 *
 * n개의 과목이 있을 때 모든 과목을 수강할 수 있는지 확인하는 문제입니다.
 *
 * 이것도 어떻게 풀어야 할지 전혀 모르겠어서 풀이랑 ChatGPT에게 도움을 받았습니다.
 * 사이클이 존재하는지 확인하는 문제라고 합니다. 사이클이 있으면 모든 과목을 수강할 수 없습니다.
 */
var canFinish = function (numCourses, prerequisites) {
  // 그래프 초기화
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [a, b] of prerequisites) {
    graph[b].push(a);
  }

  // 방문 상태 배열 (0: 방문 안 함, 1: 방문 중, 2: 방문 완료)
  const visited = new Array(numCourses).fill(0);

  // DFS를 사용하여 사이클 탐지
  const hasCycle = (node) => {
    if (visited[node] === 1) return true; // 사이클 발견
    if (visited[node] === 2) return false; // 이미 방문 완료된 노드

    visited[node] = 1; // 현재 노드 방문 중
    for (let neighbor of graph[node]) {
      if (hasCycle(neighbor)) return true;
    }
    visited[node] = 2; // 방문 완료
    return false;
  };

  // 모든 노드에 대해 DFS 수행
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false; // 사이클 발견 시 false 반환
  }

  return true; // 모든 노드 탐색 후 사이클이 없으면 true 반환
};
