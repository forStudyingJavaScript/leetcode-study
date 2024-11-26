/**
 * https://leetcode.com/problems/subtree-of-another-tree/
 * 39m
 */

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

var isSameTree = function (one, theOther) {
  if (!one && !theOther) return true;
  else if (!one || !theOther) return false;
  if (one.val !== theOther.val) return false;
  if (!isSameTree(one.left, theOther.left)) return false;
  if (!isSameTree(one.right, theOther.right)) return false;

  return true;
};

var isSubtree = function (root, subRoot) {
  if (isSameTree(root, subRoot)) return true;

  if (root.left && isSubtree(root.left, subRoot)) return true;
  if (root.right && isSubtree(root.right, subRoot)) return true;

  return false;
};
