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
  const checkHeight = (node) => {
    if (node === null) return 0;

    const leftHeight = checkHeight(node.left);
    const rightHeight = checkHeight(node.right);

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  };

  return checkHeight(root) !== -1;
};
