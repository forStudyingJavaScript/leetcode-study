/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }

  const visited = new Array(numCourses).fill(0);

  const dfs = (course) => {
    if (visited[course] === 1) return false;
    if (visited[course] === 2) return true;

    visited[course] = 1;
    for (const nextCourse of graph[course]) {
      if (!dfs(nextCourse)) return false;
    }
    visited[course] = 2;
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};

// Time taken : 21m 49s
// Runtime : 14ms
// Memory : 55.35MB
