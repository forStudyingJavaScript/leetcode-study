/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * 102 / Binary Tree Level Order Traversal / Medium / 12m 8s
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
};

// var levelOrder = function(root) {
//     const result = [];

//     const traverse = (node, level) => {
//         if (!node) return;
//         if (result.length === level) {
//             result.push([]); // 새로운 레벨 생성
//         }
//         result[level].push(node.val); // 현재 레벨에 값 추가
//         traverse(node.left, level + 1); // 왼쪽 자식 탐색
//         traverse(node.right, level + 1); // 오른쪽 자식 탐색
//     };

//     traverse(root, 0);
//     return result;
// };
