/*

https://leetcode.com/problems/linked-list-cycle/?envType=daily-question&envId=2023-09-04

*/

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
