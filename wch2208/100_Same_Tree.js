/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 두 노드가 모두 null이면 동일한 위치에 노드가 없음
  if (p === null && q === null) return true;

  // 한쪽만 null이면 구조가 다름
  if (p === null || q === null) return false;

  // 현재 노드의 값이 다르면 트리가 다름
  if (p.val !== q.val) return false;

  // 왼쪽과 오른쪽 자식을 재귀적으로 비교
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// time: 20m
