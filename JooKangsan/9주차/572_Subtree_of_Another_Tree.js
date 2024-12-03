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
var isSubtree = function(root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  
  const isSameTree = (tree1, tree2) => {
      if (!tree1 && !tree2) return true;
      if (!tree1 || !tree2) return false;
      if (tree1.val !== tree2.val) return false;
      return isSameTree(tree1.left, tree2.left) && 
             isSameTree(tree1.right, tree2.right);
  };
  
  return isSameTree(root, subRoot) || 
         isSubtree(root.left, subRoot) || 
         isSubtree(root.right, subRoot);
};