/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * 30m+ (x)
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // checkHeight(root)가 -1이 아니라면 균형 상태
  return checkHeight(root) !== -1;
};

function checkHeight(node) {
  // 노드가 null이면 높이 0 반환
  if (!node) return 0;

  const leftHeight = checkHeight(node.left);
  const rightHeight = checkHeight(node.right);

  // left와 right의 균형이 맞지 않다면 -1 반환
  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1;
  }

  // 균형이 맞다면 높이 반환
  return Math.max(leftHeight, rightHeight) + 1;
}
