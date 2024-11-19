/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 이 문제는 같은 레벨을 순회해야한다.
  // BFS(너비 우선 탐색) 사용

  // 빈 트리 처리
  if (!root) return [];

  // 초기화 result, queue
  const result = [];
  const queue = [root]; // TreeNode를 배열로 감싸서 배열 메서드(push, shift)를 사용할 수 있게 함

  while (queue.length > 0) {
    const levelSize = queue.length; // 현재 레벨에서 순회할 횟수
    const currentLevel = []; // 현재 레벨에 값들을 담을 배열

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // 큐에서 가장 앞의 노드 추출

      currentLevel.push(node.val); // 추출한 노드의 값을 현재 레벨 배열에 추가

      // 다음 레벨 노드들을 큐에 추가
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    // for문이 끝나면 하나의 레벨 탐색이 끝난 것이므로 result에 추가
    result.push(currentLevel);
  }

  return result;
};

// time: 1h 27m
// memory: 55.19MB
