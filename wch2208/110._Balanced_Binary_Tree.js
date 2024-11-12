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
  // 현재 노드의 높이를 구하는 함수
  const checkHeight = node => {
    // 노드가 null이면 높이는 0
    if (!node) return 0;

    // 왼쪽 서브트리 높이 계산
    let leftHeight = checkHeight(node.left);
    // 왼쪽 서브트리가 불균형인 경우 -1을 반환
    if (leftHeight === -1) return -1;

    // 오른쪽 서브트리 높이 계산
    let rightHeight = checkHeight(node.right);
    // 오른쪽 서브트리가 불균형인 경우 -1을 반환
    if (rightHeight === -1) return -1;

    // 좌우 서브트리의 높이 차이가 1보다 크면 -1 반환 (불균형)
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // 현재 노드의 높이 반환 (최대 서브트리 높이에 +1)
    return Math.max(leftHeight, rightHeight) + 1;
  };

  // checkHeight가 -1을 반환하면 트리가 불균형이므로 false 반환
  return checkHeight(root) !== -1;
};

// time: 50m
// memory:54.18MB
