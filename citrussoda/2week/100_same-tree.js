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
 */
var isSameTree = function (p, q) {
  let firstTree = [];
  let secondTree = [];

  iter(p, firstTree);
  iter(q, secondTree);

  if (firstTree.length !== secondTree.length) return false;

  for (let i = 0; i < firstTree.length - 1; i++) {
    if (firstTree[i] !== secondTree[i]) return false;
  }

  return true;
};

const iter = (target, tree) => {
  if (!target) return tree;

  tree.push(target.val);

  if (target.left) {
    iter(target.left, tree);
  } else if (target.left === null) {
    tree.push(null);
  }

  if (target.right) {
    iter(target.right, tree);
  } else if (target.right === null) {
    tree.push(null);
  }

  return tree;
};
