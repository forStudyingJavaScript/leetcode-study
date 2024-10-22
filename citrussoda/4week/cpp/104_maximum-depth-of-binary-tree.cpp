/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        // nullptr이 NULL보다 빠르며 NULL은 정수 0으로 인식이 되나 nullptr이 인식되지 않음.
        if (root == nullptr) return 0;

        // 따로 변수를 선언하지 않고 파라미터 내부에서 직접 재귀 가능
        return max(maxDepth(root -> left) + 1, maxDepth(root -> right) + 1);
    }
};