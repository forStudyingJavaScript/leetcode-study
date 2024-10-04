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
  const bfs = (start) => {
    const result = [];
    const queue = [start];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current === null) {
        result.push(null);
        continue;
      } else result.push(current.val);

      if (current.left) queue.push(current.left);
      if (!current.left && current.right) queue.push(null);
      if (current.right) queue.push(current.right);
    }

    return result;
  };

  const pArr = bfs(p);
  const qArr = bfs(q);

  return JSON.stringify(pArr) === JSON.stringify(qArr);
};
