//풀이방법1. 두 리스트를 배열로 변환 후 정렬하는 방식
// Runtime : 4ms
// Memory : 51.24MB
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
  let arr = [];

  while (list1 !== null) {
    arr.push(list1.val);
    list1 = list1.next;
  }

  while (list2 !== null) {
    arr.push(list2.val);
    list2 = list2.next;
  }

  arr.sort((a, b) => a - b);

  let dummy = new ListNode();
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
};

//풀이방법2. 재귀를 활용한 방식
// Runtime : 0ms
// Memory : 52.40MB
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
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// Time taken : 40m 32s
