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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root];
  let start = 0;

  for (; start < queue.length; ) {
    let level = queue.length - start;
    let curLevel = [];

    for (let i = 0; i < level; i++) {
      let curNode = queue[start++];
      curLevel.push(curNode.val);

      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }

    result.push(curLevel);
  }

  return result;
};
