/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const visited = new Map();
  let current = head;

  while (current) {
    if (visited.has(current)) return true;

    visited.set(current, true);
    current = current.next;
  }

  return false;
};
