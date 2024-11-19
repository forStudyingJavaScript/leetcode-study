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
  let diameter = 0;

  const Tree = (node) => {
    if (!node) return 0;

    let leftHeight = Tree(node.left);
    let rightHeight = Tree(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  Tree(root);
  return diameter;
};

// Time taken : 31m 55s
// Runtime : 2ms
// Memory : 55.43MB
