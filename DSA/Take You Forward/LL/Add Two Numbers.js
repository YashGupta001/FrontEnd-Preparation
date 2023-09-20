/*

https://leetcode.com/problems/add-two-numbers/

*/

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let sum = 0;
  let dummyNode = new ListNode();
  let head = dummyNode;

  while (l1 || l2 || sum > 0) {
    // sum > 0 for edge case if still there is any carry
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return dummyNode.next;
};
