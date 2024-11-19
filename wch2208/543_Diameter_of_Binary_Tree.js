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

// 지름은 임의의 두 노드 사이의 가장 긴 경로(간선의 개수)이며,
// 각 노드에서 좌우 서브트리의 높이 합 중 최대값이다.
// 높이를 구하고 추가로 지름도 업데이트해야한다.
var diameterOfBinaryTree = function (root) {
  // 지름 초기화
  let maxDiameter = 0;

  // 높이 반환하는 함수
  const getHeight = node => {
    // 빈 값 처리
    if (!node) return 0;

    // 좌측과 우측 높이 계산
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    // 지름 업데이트, 이전 업데이트의 지름과 현재 좌우의 높이를 더한 값(현재 지름) 중에 큰 값
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // 현재 높이 반환
    // 둘 중 더 높은 값이 필요
    return Math.max(leftHeight, rightHeight) + 1;
  };

  getHeight(root);
  return maxDiameter;
};

// time: 17m
// memory: 57.68MB
