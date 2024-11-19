/**
 * 26m53s 소요
 *
 * 시간복잡도: O(n)
 *
 * 이진 트리가 주어졌을 때 가장 긴 경로의 길이를 구하는 문제입니다.
 *
 * 시도해보다가 잘 모르겠어서 풀이를 참고해서 풀었습니다.
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const depth = (node) => {
    if (!node) return 0;

    // 왼쪽과 오른쪽의 깊이를 재귀적으로 구합니다.
    const left = depth(node.left);
    const right = depth(node.right);

    // 가장 긴 경로를 찾습니다.
    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  };

  depth(root);

  return diameter;
};
