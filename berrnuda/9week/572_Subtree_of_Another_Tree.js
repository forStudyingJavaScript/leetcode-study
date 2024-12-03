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
  if (!root || !subRoot) return false;

  const isSame = (t1, t2) => {
    if (!t1 && !t2) return true;
    if (!t1 || !t2 || t1.val !== t2.val) return false;

    return isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
  };

  return (
    isSame(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};
