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
  let result = 0;

  const maxDepth = (node) => {
    if (node === null) return 0;

    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);

    result = Math.max(result, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  };

  maxDepth(root);
  return result;
};
