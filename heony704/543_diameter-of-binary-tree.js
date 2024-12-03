/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * 37m
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  function getMax(root) {
    if (!root) return null;

    const right = root.right ? getMax(root.right) + 1 : 0;
    const left = root.left ? getMax(root.left) + 1 : 0;

    if (right + left > max) max = right + left;

    return Math.max(right, left);
  }
  getMax(root);

  return max;
};
