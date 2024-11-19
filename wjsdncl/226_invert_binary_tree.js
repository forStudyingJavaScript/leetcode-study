/**
 * 13m23s 소요
 *
 * 시간복잡도: O(n)
 *
 * 이진 트리가 주어졌을 때 이진 트리를 좌우반전한 결과를 반환하는 문제입니다.
 */
var invertTree = function (root) {
  if (!root) return null;

  // 왼쪽과 오른쪽을 재귀적으로 바꿔줍니다.
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};
