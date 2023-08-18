/*

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

*/

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};
