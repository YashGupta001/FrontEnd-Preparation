/*

https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/

https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/2701461/js-solution-with-two-pointer-explained/

*/

// Brute force
var deleteMiddle = function (head) {
  if (head.next == null) return null; // edge case like [1]
  let length = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  let mid = Math.floor(length / 2);
  let temp = head;

  for (let i = 0; i < mid - 1; i++) {
    temp = temp.next;
  }

  temp.next = temp.next.next;

  return head;
};

// Optimal 2 pointer

var deleteMiddle = function (head) {
  if (!head.next) return null;

  let slow = head;
  let fast = head;
  let prevSlow = null;

  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prevSlow.next = slow.next;

  return head;
};

// optimal 3 pointer

function deleteMiddle(head) {
  // One node list
  if (head.next == null) return null;

  let slow = new ListNode(null, head),
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
}
