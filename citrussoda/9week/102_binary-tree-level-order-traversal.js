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

  let q = [root];
  let ans = [];

  while (q.length !== 0) {
    let tempAns = [];
    let tempLength = q.length;

    for (let i = 0; i < tempLength; i++) {
      let curr = q.shift();

      tempAns.push(curr.val);

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    ans.push(tempAns);
  }
  return ans;
};
