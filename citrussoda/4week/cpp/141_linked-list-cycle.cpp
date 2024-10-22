/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode* fast = head;
        ListNode* slow = head;

        while (fast != nullptr && fast -> next != nullptr) {
            slow = slow -> next;
            fast = fast -> next -> next;

            if (slow == fast) return true;
        }

        return false;
    }
};


// 2번째 방법

// 다음 노드를 계속 찾아가면서 노드를 visited 됐는지 확인하며 다음으로 진행한다.
// 반복되지 않는다는 것은 언젠가는 끊긴다는 이야기이므로 while로 다음 노드가 NULL이 될 때까지
// 찾아가 저장한다.

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// class Solution {
// public:
//     bool hasCycle(ListNode *head) {
//         unordered_set<ListNode*> visited;
//         ListNode* current_node = head;

//         while (current_node != nullptr) {
//             // count가 항상 빠른 것은 아니며 큰 차이는 없음. set과 map의 차이인가?
//             if (visited.count(current_node)) return true;

//             visited.insert(current_node);

//             current_node = current_node -> next;
//         }

//         return false;
//     }
// };