/*

https://leetcode.com/problems/palindrome-linked-list/

*/

var isPalindrome = function (head) {
  let slow = head,
    fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverseList(slow.next);
  slow = slow.next;

  while (slow) {
    if (head.val !== slow.val) {
      return false;
    }
    slow = slow.next;
    head = head.next;
  }

  return true;
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
