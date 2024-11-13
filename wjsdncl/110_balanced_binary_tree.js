/**
 * 35m 33s 소요
 *
 * 시간복잡도: O(n)
 *
 * 이진 트리 공부좀 더 해야할 거 같습니다 잘 모르겠어서 풀이를 참고했습니다.
 *
 * 1. 재귀를 이용하여 트리의 높이를 구합니다.
 * 2. 재귀적으로 왼쪽과 오른쪽 자식 노드의 높이를 비교합니다.
 * 3. 높이 차이가 1 이상이면 false를 반환합니다.
 * 4. 높이 차이가 1 이하이면 현재 노드의 높이를 반환합니다.
 */
var isBalanced = function (root) {
  const checkHeight = (node) => {
    if (node === null) return 0;

    const leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  };

  return checkHeight(root) !== -1;
};
