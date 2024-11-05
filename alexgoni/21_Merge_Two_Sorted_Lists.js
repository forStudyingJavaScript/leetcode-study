// 😢

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
  if (!list1 && !list2) return null;
  else if (!list1) return list2;
  else if (!list2) return list1;

  let head;
  let current1 = list1;
  let current2 = list2;
  if (current1.val >= current2.val) {
    head = current2;
    current2 = current2.next;
  } else {
    head = current1;
    current1 = current1.next;
  }

  let current = head;
  while (current1 || current2) {
    if (current1 === null) {
      current.next = current2;
      break;
    }
    if (current2 === null) {
      current.next = current1;
      break;
    }

    if (current1.val >= current2.val) {
      current.next = current2;
      current2 = current2.next;
    } else {
      current.next = current1;
      current1 = current1.next;
    }

    current = current.next;
  }

  return head;
};
