/*

Reorder List

https://leetcode.com/problems/reorder-list/

*/

var reorderList = function (head) {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondLL = reverseList(slow.next);
  slow.next = null;
  let firstLL = head;

  mergeLL(firstLL, secondLL);
};

var mergeLL = function (p1, p2) {
  let p1Next = null;
  let p2Next = null;

  while (p2) {
    p1Next = p1.next;
    p2Next = p2.next;

    p1.next = p2;
    p2.next = p1Next;

    p1 = p1Next;
    p2 = p2Next;
  }
};

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
