/**
 * 32m15s
 *
 * 시간 복잡도: O(n)
 *
 * 찾아보니 토끼와 거북이 알고리즘으로 풀 수 있는 문제였습니다.
 *
 * 두 포인터를 이용하여 사이클이 존재하는지 확인합니다.
 * slow는 한 칸씩 fast는 두 칸씩 이동합니다.
 * 만약 slow와 fast가 만나면 사이클이 존재합니다.
 * 만나지 않으면 사이클이 존재하지 않습니다.
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  // fast와 fast.next가 null이 아닌 동안 반복
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // slow는 한 칸 이동
    fast = fast.next.next; // fast는 두 칸 이동

    // slow와 fast가 만나는 경우 사이클 존재
    if (slow === fast) {
      return true;
    }
  }

  // 반복이 끝날 때까지 만나지 않으면 사이클이 없음
  return false;
};
