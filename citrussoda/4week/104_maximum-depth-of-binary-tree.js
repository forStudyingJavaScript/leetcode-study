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
var maxDepth = function (root) {
  if (root === null) return 0;

  return dig(root);
};

function dig(node) {
  if (node === null) return 0;

  let leftDepth = dig(node.left);
  let rightDepth = dig(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
