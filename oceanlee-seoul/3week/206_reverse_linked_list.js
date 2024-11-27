/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head - 원래 연결 리스트의 head (첫 번째 노드)
 * @return {ListNode} - 뒤집힌 연결 리스트의 head
 */
var reverseList = function (head) {
  // 'prev'는 이전 노드를 추적하는 포인터로, 처음에는 null로 설정.
  // 이 값은 리스트를 순회하며 이전 노드를 가리키도록 갱신됨.
  let prev = null;

  // 'current'는 현재 노드를 추적하는 포인터로, 처음에는 head로 시작.
  // 리스트를 순회하면서 'current'가 가리키는 노드를 바꾸게 됨.
  let current = head;

  // 리스트의 모든 노드를 순회하기 위해 while 루프 사용.
  // 'current'가 null이 될 때까지 반복 (리스트의 끝에 도달할 때까지)
  while (current !== null) {
    // 'next'는 현재 노드의 다음 노드를 임시로 저장하는 포인터.
    // 이를 저장해둬야 다음 노드로 이동할 수 있음 (현재 노드의 링크를 바꾼 후에도 이동을 위해 필요).
    let next = current.next;

    // 현재 노드의 'next' 포인터를 이전 노드를 가리키도록 설정하여 링크를 뒤집음.
    // 즉, 현재 노드가 이전 노드를 가리키게 되어 역방향 링크가 형성됨.
    current.next = prev;

    // 'prev'를 현재 노드로 업데이트. 이로써 다음 노드가 처리될 때,
    // 현재 노드를 이전 노드로 사용할 수 있게 됨.
    prev = current;

    // 'current'를 다음 노드로 이동시킴.
    // 'next'에 저장해둔 값을 사용하여 다음 노드로 이동함.
    current = next;
  }

  // 'prev'는 이제 역방향 연결 리스트의 새로운 head를 가리킴.
  // 모든 노드의 링크가 뒤집혔으므로 새로운 head로 반환.
  return prev;
};
