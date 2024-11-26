// 207 / Course Schedule / Medium / -
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();

  // 그래프 생성
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }

  for (const [course, prereq] of prerequisites) {
    graph.get(prereq).push(course);
  }

  // 방문 상태 관리
  const visited = new Set(); // 현재 DFS 방문 중인 노드
  const completed = new Set(); // 이미 처리 완료된 노드

  // 사이클 탐지 함수
  const dfs = (course) => {
    if (visited.has(course)) return false; // 사이클 발견
    if (completed.has(course)) return true; // 이미 확인된 경우

    visited.add(course); // 현재 노드 방문 중
    for (const nextCourse of graph.get(course)) {
      if (!dfs(nextCourse)) return false; // 다음 코스에서 사이클 발견
    }
    visited.delete(course); // 탐색 완료 후 제거
    completed.add(course); // 완료된 노드로 기록

    return true;
  };

  // 각 강좌에 대해 DFS 실행
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false; // 사이클이 존재하면 false 반환
  }

  return true; // 모든 강좌를 완료할 수 있음
};
