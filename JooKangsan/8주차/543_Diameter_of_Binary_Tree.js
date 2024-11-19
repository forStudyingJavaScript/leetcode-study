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
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0;

function getHeight(node) {
  if (!node) return -1;

  let leftHeight = getHeight(node.left);
  let rightHeight = getHeight(node.right);

  maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight + 2);

  return Math.max(leftHeight, rightHeight) + 1;
}

getHeight(root);

return maxDiameter;
};