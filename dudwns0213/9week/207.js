/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/**
 * 수강 과목의 순서 정하기
 *
 * 위상 정렬 개념(BFS)을 사용해서 풀어야 한다!
 *
 * 가능과 불가능의 경우를 생각해보자!
 */

var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  // 그래프 생성
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course] += 1;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let count = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    count += 1;

    for (const neighbor of graph[node]) {
      inDegree[neighbor] -= 1;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return count === numCourses;
};
