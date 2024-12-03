// 😢

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

  const visited = Array(numCourses).fill(0);

  const hasCycle = (cource) => {
    if (visited[cource] === 1) return true;
    if (visited[cource] === 2) return false;

    visited[cource] = 1;
    for (const neighbor of graph[cource]) {
      if (hasCycle(neighbor)) return true;
    }
    visited[cource] = 2;

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
};
