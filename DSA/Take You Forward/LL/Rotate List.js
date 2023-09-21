/*

https://leetcode.com/problems/rotate-list/description/

*/

var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let depth = 0;
  let current = head;
  while (current) {
    current = current.next;
    depth++;
  }

  // no of time need to reversed

  k = k % depth;

  while (k > 0) {
    let newTail = head;
    while (newTail.next.next) {
      newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    newHead.next = head;
    head = newHead;
    k--;
  }

  return head;
};
