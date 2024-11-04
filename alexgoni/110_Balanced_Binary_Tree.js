// 😢

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let result = true;

  const maxDepth = (root) => {
    if (!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    if (Math.abs(leftDepth - rightDepth) > 1) result = false;

    return Math.max(leftDepth, rightDepth) + 1;
  };

  maxDepth(root);
  return result;
};
