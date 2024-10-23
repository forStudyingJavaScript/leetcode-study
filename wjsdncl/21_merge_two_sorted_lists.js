/**
 * 28m11s 소요
 *
 * 시간복잡도: O(n)
 *
 * 어떻게 풀어야할지 모르겠어서 찾아봐서 풀었습니다.
 * 노드 어렵네요.
 *
 * 1. 두 리스트를 비교하면서 작은 값을 새로운 리스트에 추가합니다.
 * 2. 작은 값을 추가한 리스트의 다음 값을 작은 값이 아닌 리스트로 변경합니다.
 * 3. 1, 2를 반복합니다.
 * 4. 작은 값이 없는 리스트를 추가합니다.
 * 5. 새로운 리스트를 반환합니다.
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let current = head;

  // 두 리스트를 비교하면서 작은 값을 새로운 리스트에 추가 (O(n))
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;

  return head.next;
};
