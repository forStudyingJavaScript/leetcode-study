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
  let ans = new ListNode();
  let ptr = ans;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      ptr.next = list1;
      list1 = list1.next;
    } else {
      ptr.next = list2;
      list2 = list2.next;
    }
    ptr = ptr.next;
  }

  ptr.next = list1 || list2;

  return ans.next;
};
