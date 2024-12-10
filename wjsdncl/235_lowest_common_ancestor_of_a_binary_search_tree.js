/**
 * 28m41s 소요
 *
 * 시간복잡도: O(n) (n: 트리의 높이)
 *
 * 트리 문제라 어려울 줄 알았는데 생각보다 쉬웠습니다.
 *
 * 이진 탐색 트리에서 두 노드의 가장 가까운 공통 조상을 찾는 문제입니다.
 *
 * 현재 노드의 값이 두 노드보다 크면 왼쪽으로 이동하고,
 * 현재 노드의 값이 두 노드보다 작으면 오른쪽으로 이동합니다.
 * 현재 노드가 두 노드 사이에 있는 경우 현재 노드가 최소 공통 조상입니다.
 *
 * 최소 공통 조상을 찾지 못한 경우 null을 반환합니다.
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    // 현재 노드 값이 두 노드보다 크면 왼쪽으로 이동
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    }
    // 현재 노드 값이 두 노드보다 작으면 오른쪽으로 이동
    else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    }
    // 현재 노드가 LCA인 경우
    else {
      return root;
    }
  }
  return null; // 트리 순회가 끝난 경우
};
