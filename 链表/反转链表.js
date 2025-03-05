// 迭代 空间复杂度O1
function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next; // 先保存下一个节点
    curr.next = prev;     // 反转当前节点的指向
    prev = curr;          // prev 前进
    curr = next;          // curr 前进
  }

  return prev; // prev 成为新的头节点
}

// 递归 空间复杂度On
function reverseLinkedListRecursive(head) {
  if (!head || !head.next) return head; // 递归终止条件，返回最后一个节点（新头节点）

  let newHead = reverseLinkedListRecursive(head.next); // 递归反转剩余链表
  head.next.next = head; // 让后一个节点指向当前节点，实现反转
  head.next = null; // 断开原链表的连接，防止成环

  return newHead; // 返回新头节点
}