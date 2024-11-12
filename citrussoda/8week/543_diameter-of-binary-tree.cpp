/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
 public:
  int diameterOfBinaryTree(TreeNode* root) {
    int ans = 0;

    diameter(root, ans);

    return ans;
  }

  int diameter(TreeNode* node, int& ans) {
    if (!node) return 0;

    int left = diameter(node->left, ans);
    int right = diameter(node->right, ans);

    // 오른쪽 왼쪽 diameter 최대치 저장 (left, right는 노드 기준 최대 높이들)
    ans = max(ans, left + right);

    // 높이만 return
    return max(left, right) + 1;
  }
};