/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * prev, current, head 3개의 포인터 사용
 * prev -> head -> current
 */
var reverseList = function (head) {
  var prev = null;
  var current = null;

  while (head) {
    // 화살표 방향 바뀌기 전에 포인터 이동
    current = head.next;

    // 화살표 방향 바꾸기
    head.next = prev;
    prev = head;
    head = current;
  }

  return prev;
};
