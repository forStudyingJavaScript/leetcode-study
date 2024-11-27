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
  // 문제 이해
  // 두 리스트의 값의 크기를 비교하면서 올바른 순서로 새로운 연결리스트를 구성해야한다.
  // 기본 종료 조건: 하나의 리스트가 끝나면 다른 리스트를 반환
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // 현재 노드를 비교하여 병합 리스트를 결정합니다.
  if (list1.val < list2.val) {
    // list1의 값이 작으면 list1을 선택하고 다음 노드들을 병합합니다.
    list1.next = mergeTwoLists(list1.next, list2);
    return list1; // 현재 노드를 반환하여 재귀적으로 연결됩니다.
  } else {
    // list2의 값이 작거나 같으면 list2를 선택하고 다음 노드들을 병합합니다.
    list2.next = mergeTwoLists(list1, list2.next);
    return list2; // 현재 노드를 반환하여 재귀적으로 연결됩니다.
  }
};

// 51.82MB
// 46m
