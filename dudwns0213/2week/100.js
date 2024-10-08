/**
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
 *
 * 뇌가 너무 안 돌아가요 ㅠ.ㅠ
 *
 * 처음으로 노드가 아예 없는 경우...? 가 있을지는 모르겠지만 null을 일단 해줬습니다
 * 한쪽만 null인 경우도 해뒀어요
 * 그리고 아예 다른 경우도 체크를 했습니당
 *
 * 비교 방식을 다 하나하나 뜯어야 하나 했는데 세상에는 여러 가지 좋은 방식이 있더라구요
 * 그 중 가장 보편적인 재귀를 활용해봤습니다
 *
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
