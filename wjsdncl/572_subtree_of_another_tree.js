/**
 * 23m41s 소요
 *
 * 시간복잡도: O(n)
 *
 * 두 이진 트리가 주어졌을 때, 두 번째 트리가 첫 번째 트리의 서브트리인지 확인하는 문제입니다.
 *
 * 빈 트리인 경우 false를 반환합니다.
 * 두 트리가 동일한지 확인하는 함수로 두 트리가 동일하지 않은 경우 왼쪽과 오른쪽 자식을 재귀적으로 비교합니다.
 * 두 트리가 동일한 경우 true를 반환하고, 그렇지 않은 경우 false를 반환합니다.
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false; // 빈 트리인 경우 false 반환

  // 두 트리가 동일한지 확인하는 함수
  const isSameTree = (R, S) => {
    if (!R && !S) return true; // 둘 다 null인 경우 두 트리는 동일
    if (!R || !S || R.val !== S.val) return false; // 둘 중 하나가 null이거나 노드의 값이 다르면 트리는 동일하지 않음
    return isSameTree(R.left, S.left) && isSameTree(R.right, S.right); // 현재 노드가 같다면 왼쪽과 오른쪽 자식을 재귀적으로 비교
  };

  if (isSameTree(root, subRoot)) return true; // 두 트리가 동일한 경우 true 반환
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot); // 두 트리가 동일하지 않은 경우 왼쪽과 오른쪽 자식을 재귀적으로 비교
};
