/**
 * 
 * 543. Diameter of Binary Tree
Easy
Topics
Companies
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100

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
  let maxDiameter = 0;
  const getBinaryTreeHeight = (node) => {
    if (!node) return 0;

    // 현재 노드부터 높이를 재귀적으로 계산
    const right = getBinaryTreeHeight(node.right);
    const left = getBinaryTreeHeight(node.left);

    maxDiameter = Math.max(maxDiameter, right + left);

    // 현재 노드를 포함하기 위해 + 1
    return Math.max(right, left) + 1;
  };

  getBinaryTreeHeight(root);
  return maxDiameter;
};
