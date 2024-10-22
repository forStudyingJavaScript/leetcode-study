/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 40m
 *
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
  // 리스트 값 없을 때 처리
  if (!list1 || !list2) return list1 ?? list2;

  // 초기화
  let mergedList = null;
  let list1Pointer = list1;
  let list2Pointer = list2;

  if (list1.val <= list2.val) {
    mergedList = list1;
    list1Pointer = list1Pointer.next;
  } else {
    mergedList = list2;
    list2Pointer = list2Pointer.next;
  }

  let currentNode = mergedList;

  // 두 리스트의 노드 값 중 더 작은 값 연결
  while (list1Pointer && list2Pointer) {
    if (list1Pointer.val <= list2Pointer.val) {
      currentNode.next = list1Pointer;
      currentNode = currentNode.next;
      list1Pointer = list1Pointer.next;
    } else {
      currentNode.next = list2Pointer;
      currentNode = currentNode.next;
      list2Pointer = list2Pointer.next;
    }
  }

  // 리스트 남은 노드 연결
  if (list1Pointer) currentNode.next = list1Pointer;
  if (list2Pointer) currentNode.next = list2Pointer;

  return mergedList;
};
