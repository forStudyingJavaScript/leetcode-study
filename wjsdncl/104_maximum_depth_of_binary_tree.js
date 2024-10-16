/**
 * 38m21s
 *
 * 시간 복잡도: O(n)
 *
 * 이진 트리의 최대 깊이를 구하는 문제입니다.
 * 재귀적으로 왼쪽 서브트리와 오른쪽 서브트리의 최대 깊이를 구하고 더 큰 값에 1을 더해 반환합니다.
 * 루트가 null인 경우 깊이는 0입니다.
 */
var maxDepth = function (root) {
  // 루트가 null인 경우, 깊이는 0
  if (root === null) {
    return 0;
  }

  // 왼쪽과 오른쪽 서브트리의 최대 깊이를 구함
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // 더 큰 깊이에 1을 더해 반환
  return Math.max(leftDepth, rightDepth) + 1;
};
