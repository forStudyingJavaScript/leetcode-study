/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false; // root가 null이면 false 반환
  if (isSameTree(root, subRoot)) return true; // 현재 노드에서 동일한 트리인지 확인
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot); // 왼쪽 또는 오른쪽에서 찾기
};

// 두 트리가 동일한지 확인하는 함수
var isSameTree = function (tree1, tree2) {
  if (!tree1 && !tree2) return true; // 둘 다 null이면 동일
  if (!tree1 || !tree2 || tree1.val !== tree2.val) return false; // 값이 다르거나 한쪽이 null이면 다름
  return (
    isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
  ); // 좌/우 자식 비교
};

/**
 * 문제를 푼 다음 GPT에게 한 줄씩 해석을 부탁했습니다...
 */
