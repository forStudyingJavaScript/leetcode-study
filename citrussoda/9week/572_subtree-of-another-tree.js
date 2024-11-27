/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  if (isSametree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSametree = function (root1, root2) {
  if (!root1 && !root2) return true;
  // 하나라도 null이면 false
  if (!root1 || !root2) return false;
  // [1] [0] 한개씩 비교할때도 고려해야 함...
  if (root1.val !== root2.val) return false;

  return (
    isSametree(root1.left, root2.left) && isSametree(root1.right, root2.right)
  );
};
