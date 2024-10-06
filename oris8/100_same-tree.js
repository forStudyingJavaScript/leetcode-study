/**
 * 21m 2s
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  // 리프노드 [0, null, null]
  if (p === null && q === null) return true;

  // 한쪽 방향이 끝났을 수 있으므로,
  // null을 먼저 체크하거나 ? 이용해서 안전하게 접근
  if (p?.val !== q?.val) return false;
  // if (p === null || q === null || p.val !== q.val) return false;

  // 리프노드도 아니고 서로 다른 값도 아닐 때,
  // 왼쪽과 오른쪽을 재귀적으로 다시 탐색
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  // Runtime 44ms Beats 92.72%
  // Memory 49.23MB Beats 43.46%
};
