/**
 * https://leetcode.com/problems/same-tree/
 * 16:27
 *
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
// 개선
var isSameTree = function (p, q) {
  // 둘 다 null이면 같은 트리
  if (p === null && q === null) {
    return true;
  }
  // 하나만 null이거나 값이 다르면 다른 트리
  if (p === null || q === null || p.val !== q.val) {
    return false;
  }
  // 좌우 자식을 재귀적으로 비교
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 원래 풀이
var isSameTree = function (p, q) {
  const pStr = JSON.stringify(p);
  const qStr = JSON.stringify(q);

  return pStr === qStr;
};
