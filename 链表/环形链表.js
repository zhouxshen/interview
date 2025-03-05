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
  let low = head
  let fast = head
  while(fast?.next) {
      low = low.next
      fast = fast.next.next
      if (low === fast) return true
  }
  return false
};