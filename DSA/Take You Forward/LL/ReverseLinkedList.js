/*

Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/ 



*/

var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let current = head;
  let prev = null;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
};
