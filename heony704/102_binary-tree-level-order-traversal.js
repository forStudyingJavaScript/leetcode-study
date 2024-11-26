/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 36m
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const levelOrders = [];
  let targetNodes = [root];

  while (root) {
    const nextTargets = [];
    const currentLevels = [];
    for (const targetNode of targetNodes) {
      currentLevels.push(targetNode.val);

      if (targetNode.left !== null) nextTargets.push(targetNode.left);
      if (targetNode.right !== null) nextTargets.push(targetNode.right);
    }
    levelOrders.push(currentLevels);
    if (nextTargets.length < 1) break;
    targetNodes = nextTargets;
  }

  return levelOrders;
};
