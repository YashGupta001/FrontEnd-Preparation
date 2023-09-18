/*

Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/ 



*/

// Iterative
// Time: O(n)
// Space: O(1)

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

//

var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};

// Recursive
// Time: O(n)
// Space: O(n)

var reverseList = function (head, prev = null) {
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  return reverseList(next, head);
};
