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
  // 두 트리가 모두 null 이면 true
  if (p === null && q === null) {
    return true;
  }

  // 하나만 null이거나 값이 다르면 false
  if (p === null || q === null || p.val !== q.val) {
    return false;
  }

  // 왼쪽, 오른쪽 서브트리도 재귀적으로 검사
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
