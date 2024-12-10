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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (!subRoot) return true; // 서브 루트가 없으면 비교할 필요 없이 true

  // 현재 노드 비교
  if (isSameTree(root, subRoot)) return true;

  // 재귀호출: 왼쪽, 오른쪽 서브트리 확인
  // 둘 중 한 곳에서 서브트리와 일치하는 트리가 있으면 true
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true; // 둘 다 null이면 true
  if (!p || !q) return false; // 하나만 null이면 false

  // 현재 노드 비교
  if (p.val !== q.val) return false;

  // 재귀 호출: 왼쪽과 오른쪽 트리 모두 같아야 함
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// time: 43m
// memory: 54.73MB
