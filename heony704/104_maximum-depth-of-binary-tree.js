/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 30m+
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 재귀적으로 왼쪽 트리와 오른쪽 트리 중 더 큰 값으로 선택
var maxDepth = function (root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
