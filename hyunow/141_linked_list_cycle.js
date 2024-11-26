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
var hasCycle = function(head) {
    var slow_pointer = head
    var fast_pointer = head

    while(fast_pointer !== null && fast_pointer.next !== null) {
        slow_pointer = slow_pointer.next
        fast_pointer = fast_pointer.next.next
        if(slow_pointer === fast_pointer) {
            return true
        }
    }

    return false
};