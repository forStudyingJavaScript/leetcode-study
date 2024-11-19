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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function depth(node) {
        if (node === null) return 0;
        
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Calculate the diameter passing through this node
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the height of this subtree
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);
    return diameter;
};
