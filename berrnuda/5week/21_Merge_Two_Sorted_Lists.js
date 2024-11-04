/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = null;
  let current = null;

  for (; list1 !== null && list2 !== null; ) {
    let selectedNode;

    if (list1.val <= list2.val) {
      selectedNode = list1;
      list1 = list1.next;
    } else {
      selectedNode = list2;
      list2 = list2.next;
    }

    if (head === null) {
      head = selectedNode;
      current = head;
    } else {
      current.next = selectedNode;
      current = current.next;
    }
  }

  if (list1 !== null) {
    if (current === null) {
      return list1;
    }
    current.next = list1;
  } else if (list2 !== null) {
    if (current === null) {
      return list2;
    }
    current.next = list2;
  }

  return head;
};

// Runtime:  1 ms     Beats 97.72%
// Memory:   51.30 MB Beats 82.63%

// 5m 28s
