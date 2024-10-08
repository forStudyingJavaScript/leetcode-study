/**
 * 24m40s 소요
 *
 * 시간복잡도: O(n) n = 트리의 노드 개수
 *
 * & 비트 연산자를 사용하여 두 트리의 노드를 비교합니다.
 * 이진 트리를 처음 알게 되었는데 이진 트리의 구조를 이해하는 데 도움이 되었습니다.
 * val은 현재 노드의 값이고 left와 right는 왼쪽과 오른쪽 자식 노드를 가리킵니다.
 *
 * 두 트리가 모두 null인 경우 두 트리는 동일합니다.
 * 둘 중 하나가 null이거나 노드의 값이 다르면 트리는 동일하지 않습니다.
 * 현재 노드가 같다면 왼쪽과 오른쪽 자식을 재귀적으로 비교합니다.
 * 두 트리가 동일하다면 true를 반환하고 그렇지 않다면 false를 반환합니다.
 */
var isSameTree = function (p, q) {
  // 둘 다 null인 경우 두 트리는 동일
  if (!p && !q) return true;

  // 둘 중 하나가 null이거나 노드의 값이 다르면 트리는 동일하지 않음
  if (!p || !q || p.val !== q.val) return false;

  // 현재 노드가 같다면 왼쪽과 오른쪽 자식을 재귀적으로 비교 (O(n))
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
