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
var mergeTwoLists = function(list1, list2) {
  const preList = new ListNode(-1)
  let pre = preList
  let left = list1
  let right = list2
  while(left !== null && right !== null) {
      if (left.val < right.val) {
          pre.next = left
          left = left.next
      } else {
          pre.next = right
          right = right.next
      }
      pre = pre.next
  }
  pre.next = left === null ? right : left
  return preList.next
};