/**
 * https://leetcode.com/problems/linked-list-cycle/
 * 9m
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 토끼와 거북이 알고리즘을 통해 Linked List의 사이클 확인
// 토끼와 거북이 알고리즘: 한 칸씩 이동하는 포인터, 두 칸씩 이동하는 포인터 총 두 개를 사용해 둘이 동일한 노드에서 만나는지 확인
var hasCycle = function (head) {
  // 리스트가 비어있거나 노드가 하나뿐이라면 사이클이 없음
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // 한 번에 한 노드씩 이동
    fast = fast.next.next; // 한 번에 두 노드씩 이동

    // slow와 fast가 만난다면 사이클이 존재
    if (slow === fast) {
      return true;
    }
  }

  // fast가 null에 도달하면 사이클이 없다는 의미
  return false;
};

// 편법
var hasCycle = function (head) {
  try {
    console.log(JSON.stringify(head));
    return false;
  } catch {
    return true;
  }
};
