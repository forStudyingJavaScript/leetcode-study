/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 인접 리스트로 그래프 만들기
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  // visited: 0 = 미방문, 1 = 현재 경로에서 방문 중, 2 = 완전히 방문 완료
  const visited = new Array(numCourses).fill(0);

  const hasCycle = (course) => {
    // 현재 경로에서 방문 중인 노드를 다시 방문하면 순환이 있다는 뜻
    if (visited[course] === 1) return true;
    // 이미 완전히 방문한 노드면 안전
    if (visited[course] === 2) return false;

    // 현재 노드 방문 처리
    visited[course] = 1;

    // 현재 코스의 선수과목들 확인
    for (const prereq of graph[course]) {
      if (hasCycle(prereq)) return true;
    }

    // 방문 완료 처리
    visited[course] = 2;
    return false;
  };

  // 모든 코스에 대해 순환 확인
  for (let course = 0; course < numCourses; course++) {
    if (hasCycle(course)) return false;
  }

  return true;
};
