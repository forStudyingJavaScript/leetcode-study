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
 * @return {TreeNode}
 */

var invertTree = function (root) {
  // 예제를 보면 트리를 뒤집어야한다
  // 재귀를 사용하는 경우는 노드의 끝까지 가서 마지막 함수가 완료되면 그 값을 받아서 상위 노드가 점차 풀이되는 방식이다.
  // 수행할 로직은 레프트와 라이트를 교체하는 것

  if (root === null) return null;

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// time: 29m
// memory: 50.10MB
