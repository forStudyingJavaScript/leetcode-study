/**
 * https://leetcode.com/problems/invert-binary-tree/
 * 7m
 */

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
  if (!root) return root;

  const tmp = root.right;
  root.right = root.left;
  root.left = tmp;

  invertTree(root.right);
  invertTree(root.left);

  return root;
};
