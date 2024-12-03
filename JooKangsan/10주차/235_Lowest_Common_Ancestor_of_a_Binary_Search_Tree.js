/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  let min = Math.min(p.val, q.val)
  let max = Math.max(p.val, q.val)

  if(min > root.val) {
      return lowestCommonAncestor(root.right, p, q)
  } else if(max < root.val) {
      return lowestCommonAncestor(root.left, p, q)
  } else {
      return root
  }
};