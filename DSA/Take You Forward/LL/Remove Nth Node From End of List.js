/*

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

https://www.youtube.com/watch?v=Lhu3MsXZy-Q

*/

var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next; // edge case in case removing the first node

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};
