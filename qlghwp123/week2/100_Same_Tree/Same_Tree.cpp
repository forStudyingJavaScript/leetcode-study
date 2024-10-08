//
// Created by qlghwp123 on 2024-10-01.
//
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
    // 재귀로 하는 트리 전위 순회 알고리즘을 검색 후 참조
    // void traversal(int* arr, TreeNode* tree, int count) {
    //     if(tree == NULL || count > 299) {
    //         return;
    //     } else {
    //         arr[count] = tree->val ? tree->val : 0;
    //         traversal(arr, tree->left, count * 2 + 1);
    //         traversal(arr, tree->right, count * 2 + 2);
    //     }
    // }
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // 아래 풀이는 특정 케이스에 오류를 뱉음.
        // 제약 조건에서 range 가 [0, 100] 라고 해서 노드가 100개가 최대인줄 알았지만 그게 아니였다.
        // 문제에서 표현한 트리 배열은 완전 이진 트리를 기준으로 없는 부분도 포함하는게 컸기 때문에
        // 내가 작성한 풀이는 정상적으로 동작하지 않았던거 같다.
        // int arr1[300];
        // int arr2[300];

        // fill_n(arr1, 300, 10001);
        // fill_n(arr2, 300, 10001);

        // bool result = true;
        // int size = 1;

        // traversal(arr1, p, 0);
        // traversal(arr2, q, 0);

        // for(int i = 0; i < 300; i++) {
        //     if(arr1[i] != arr2[i]) {
        //         result = false;
        //         break;
        //     }
        // }

        // return result;

        // 인터넷 상에서 풀이 참조.
        // 해당 함수를 재귀로 그대로 이용해도 됐었다.

        // 모두 빈 트리면 동일
        if (p == NULL && q == NULL) {
            return true;
        }
        // 둘 중 하나라도 비면 다른 것
        if (p == NULL || q == NULL) {
            return false;
        }
        // 현재 루트 노드 값이 같으면 좌, 우 그대로 진행
        if (p->val == q->val) {
            return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
        // 값이 다르면 다른 것으로 간주
        return false;
    }
};